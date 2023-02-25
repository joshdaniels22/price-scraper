const { test } = require('@playwright/test')
const fs = require('fs')
const cheerio = require("cheerio")
const moment = require("moment")

test('not a real rest', async ({ page }) => {
  const url = 'https://www.takealot.com/lego-technic-app-controlled-top-gear-rally-car/PLID60538045'
  await page.goto(url);
  const html = await page.content()
  const $ = cheerio.load(html)

  var currentDate = moment().format('DD-MM-YYYY H:mm');

  $('.buybox-module_price_2YUFa', html).each(function () {
    const price = $(this).text()
    const strippedPrice = price.replace('R ','').replace(',','')
    const rowEntry = strippedPrice + " " + currentDate + '\n'


    fs.appendFile('../model/prices.txt', rowEntry, (err) => {
      if (err) throw err;
    })    
  })
});
