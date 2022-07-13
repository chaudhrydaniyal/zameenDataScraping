const puppeteer = require("puppeteer");

let scrollToBottom = require("scroll-to-bottomjs");

const cheerio = require("cheerio");

async function scrapeZameenData(url, propertyType , city) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.evaluate(scrollToBottom);

  var title = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".ef447dde")).map(
      (child) => child.innerHTML
    );
  });

  const zameenData = title.map((el) => {
    const $ = cheerio.load(el);

    const retObj = {};

    $(".a71a1ca3").filter(function () {
      retObj.img = $(this)
        .children()
        .find("._219b7e0a")
        .children()
        .last()
        .attr("src");
    });

    $("._732aff15").filter(function () {
      retObj.price = $(this).children().find(".c4fc20ba").text();
      retObj.title = $(this).children().find(".c0df3811").text();

      retObj.location = $(this).children().find("._162e6469").text();
      retObj.propertyType = propertyType
      retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
      retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
      retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
      retObj.city = city


      // retObj.washrooms = $(this).children().find("._984949e5").text();

    });

    return retObj;
  });

  browser.close();

  return { zameenData };
}

module.exports = {
  scrapeZameenData,
};
