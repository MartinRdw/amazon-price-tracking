'use strict'
const { workflow, duration } = require('zenaton')

module.exports = workflow('TrackAmazonPrice', function * (product, productUrl, alertPrice, hoursBetweenEachCheck) {
  const slack = this.connector('slack', process.env.ZENATON_SLACK_CONNECTOR_ID)

  while (true) {
    // get product price
    const price = yield this.run.task('GetAmazonProductPrice', productUrl)

    if (!price) {
      // can not find price
      slack.post('chat.postMessage', {
        body: {
          text: `❌ Can not find price of ${product} \n ➡️ ${productUrl}`,
          as_user: true,
          channel: 'amazon'
        }
      })

      // terminate workflow
      this.terminate()
    }

    // send alert if needed
    if (parseFloat(price) < alertPrice) {
      slack.post('chat.postMessage', {
        body: {
          text: `🚨 ${product} goes below ${alertPrice}€ \n 💰 Current price: ${price} \n ➡️ ${productUrl}`,
          as_user: true,
          channel: 'amazon'
        }
      })

      // terminate workflow
      this.terminate()
    }

    // wait 4 hours before next check
    yield this.wait.for(duration.hours(hoursBetweenEachCheck))
  }
})
