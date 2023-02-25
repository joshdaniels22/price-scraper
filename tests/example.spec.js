const { test } = require('@playwright/test')
const fs = require('fs')
const cheerio = require("cheerio")
const moment = require("moment")

test('not a real rest', async ({ page }) => {
  const url = 'https://www.takealot.com/lego-technic-app-controlled-top-gear-rally-car/PLID60538045'
  await page.goto(url);

  const html = await page.content()
  const $ = cheerio.load(html)

  $('.buybox-module_price_2YUFa', html).each(function () {
    const price = $(this).text()
    const rowEntry = price + " " + currentDate + '\n'
    var currentDate = moment().format('DD-MM-YYYY H:mm');

    fs.appendFile('prices.txt', rowEntry, (err) => {
      if (err) throw err;
    })    
  })
});
