const { task } = require("zenaton");
const puppeteer = require("puppeteer");

const SELECTORS = {
  productTitle: "#productTitle",
  productPrice_1: "#priceblock_dealprice",
  productPrice_2: "#attach-base-product-price"
};

module.exports = task("GetAmazonProductPrice", async function(productUrl) {
  const browser = await puppeteer.launch({
    headless: true,
    sandbox: false,
    args: [
      "--remote-debugging-port=9222",
      "--disable-setuid-sandbox",
      "--no-sandbox"
    ],
    defaultViewport: {
      width: 1100,
      height: 840
    }
  });
  const page = await browser.newPage();
  await page.goto(productUrl);

  // wait page load
  await page.waitForSelector(SELECTORS.productTitle, { visible: true });

  // find price
  let priceInput = await page.$(SELECTORS.productPrice_1);
  let price = await page.evaluate(element => element.textContent, priceInput);

  if (price) {
    await browser.close();
    return parseFloat(price.slice(0, -2));
  }

  priceInput = await page.$(SELECTORS.productPrice_2);
  price = await page.evaluate(element => element.value, priceInput);

  await browser.close();

  if (!price) {
    return null;
  }

  return price;
});
