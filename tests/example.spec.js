// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs')
const cheerio = require("cheerio")
const moment = require("moment")

test('has title', async ({ page }) => {
  await page.goto('https://www.takealot.com/lego-technic-app-controlled-top-gear-rally-car/PLID60538045');
  const html = await page.content()
  const $ = cheerio.load(html)

  var date = moment();
  var currentDate = date.format('DD-MM-YYYY H:mm');
  console.log(currentDate); // "17/06/2022"

  $('.buybox-module_price_2YUFa', html).each(function () {
    const price = $(this).text()
    const rowEntry = price + " " + currentDate + '\n'
    fs.appendFile('prices.txt', rowEntry, (err) => {
      if (err) throw err;
    })
  })
});
