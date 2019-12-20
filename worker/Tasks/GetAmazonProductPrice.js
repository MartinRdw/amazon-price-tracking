const { task } = require('zenaton')
const puppeteer = require('puppeteer')

const SELECTORS = {
  productTitle: '#productTitle',
  productPrice: '#attach-base-product-price'
}

module.exports = task('GetAmazonProductPrice', async function (productUrl) {
  const browser = await puppeteer.launch(
    {
      headless: true,
      sandbox:false,
      args : [
        '--remote-debugging-port=9222',
        '--disable-setuid-sandbox', 
        '--no-sandbox'
      ],
      defaultViewport: {
        width: 1100,
        height: 840
      }
    }
  )
  const page = await browser.newPage()
  await page.goto(productUrl)

  // wait page load
  await page.waitForSelector(SELECTORS.productTitle, { visible: true })

  // find price
  const priceInput = await page.$(SELECTORS.productPrice)
  const price = await page.evaluate(element => element.value, priceInput)

  await browser.close()

  return price
})
