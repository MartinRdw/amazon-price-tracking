const run = require('./client').run

const product = 'Iphone 11 Pro - 64go - 2'
const productUrl = 'https://www.amazon.fr/Apple-iPhone-11-Pro-64-Go/dp/B07XRRNYWK'
const alertPrice = 1100
const hoursBetweenEachCheck = 4

// run workflow
run.withTag(`${product} (${alertPrice}€)`).workflow('TrackAmazonPrice', product, productUrl, alertPrice, hoursBetweenEachCheck)
