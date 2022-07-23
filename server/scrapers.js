const puppeteer = require("puppeteer");

let scrollToBottom = require("scroll-to-bottomjs");

const propertyImages = require("./propertyImages");


const cheerio = require("cheerio");

async function scrapeZameenData(url, propertyType , city) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(90000); 
  await page.goto(url);

  await page.evaluate(scrollToBottom);

  var title = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".ef447dde")).map(
      (child) => child.innerHTML
    );
  });

  console.log("length", title.length)

  const zameenData = await Promise.all(
    title.slice(0,5).map(async (el) => {
    const $ = cheerio.load(el);

    var retObj = {};

    $(".a71a1ca3").filter(function () {
      retObj.img = $(this)
        .children()
        .find("._219b7e0a")
        .children()
        .last()
        .attr("src");
    });

    $(".f0349ab4").filter(function () {
      retObj.detailLink = $(this)
        .children()
        .find("._7ac32433")
        .attr("href");
    });

    retObj =await propertyImages.scrapePropetyImages(retObj.detailLink, browser)

    // $("._732aff15").filter(function () {
    //   retObj.price = $(this).children().find(".c4fc20ba").text();
    //   retObj.title = $(this).children().find(".c0df3811").text();
    //   retObj.location = $(this).children().find("._162e6469").text();
    //   retObj.propertyType = propertyType
    //   retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
    //   retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
    //   retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
    //   retObj.city = city
      
      // retObj.washrooms = $(this).children().find("._984949e5").text();
    // });

    return retObj;
  }))

  const zameenData2 = await Promise.all(
    title.slice(5,10).map(async (el) => {
    const $ = cheerio.load(el);

    var retObj = {};

    // $(".a71a1ca3").filter(function () {
    //   retObj.img = $(this)
    //     .children()
    //     .find("._219b7e0a")
    //     .children()
    //     .last()
    //     .attr("src");
    // });

    $(".f0349ab4").filter(function () {
      retObj.detailLink = $(this)
        .children()
        .find("._7ac32433")
        .attr("href");
    });

    retObj =await propertyImages.scrapePropetyImages(retObj.detailLink, browser)

    // $("._732aff15").filter(function () {
    //   retObj.price = $(this).children().find(".c4fc20ba").text();
    //   retObj.title = $(this).children().find(".c0df3811").text();
    //   retObj.location = $(this).children().find("._162e6469").text();
    //   retObj.propertyType = propertyType
    //   retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
    //   retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
    //   retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
    //   retObj.city = city
      
      // retObj.washrooms = $(this).children().find("._984949e5").text();
    // });

    return retObj;
  }))

  const zameenData3 = await Promise.all(
    title.slice(10,15).map(async (el) => {
    const $ = cheerio.load(el);

    var retObj = {};

    // $(".a71a1ca3").filter(function () {
    //   retObj.img = $(this)
    //     .children()
    //     .find("._219b7e0a")
    //     .children()
    //     .last()
    //     .attr("src");
    // });

    $(".f0349ab4").filter(function () {
      retObj.detailLink = $(this)
        .children()
        .find("._7ac32433")
        .attr("href");
    });

    retObj =await propertyImages.scrapePropetyImages(retObj.detailLink, browser)

    // $("._732aff15").filter(function () {
    //   retObj.price = $(this).children().find(".c4fc20ba").text();
    //   retObj.title = $(this).children().find(".c0df3811").text();
    //   retObj.location = $(this).children().find("._162e6469").text();
    //   retObj.propertyType = propertyType
    //   retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
    //   retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
    //   retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
    //   retObj.city = city
      
      // retObj.washrooms = $(this).children().find("._984949e5").text();
    // });

    return retObj;
  }))


  const zameenData4 = await Promise.all(
    title.slice(15,20).map(async (el) => {
    const $ = cheerio.load(el);

    var retObj = {};

    // $(".a71a1ca3").filter(function () {
    //   retObj.img = $(this)
    //     .children()
    //     .find("._219b7e0a")
    //     .children()
    //     .last()
    //     .attr("src");
    // });

    $(".f0349ab4").filter(function () {
      retObj.detailLink = $(this)
        .children()
        .find("._7ac32433")
        .attr("href");
    });

    retObj =await propertyImages.scrapePropetyImages(retObj.detailLink, browser)

    // $("._732aff15").filter(function () {
    //   retObj.price = $(this).children().find(".c4fc20ba").text();
    //   retObj.title = $(this).children().find(".c0df3811").text();
    //   retObj.location = $(this).children().find("._162e6469").text();
    //   retObj.propertyType = propertyType
    //   retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
    //   retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
    //   retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
    //   retObj.city = city
      
      // retObj.washrooms = $(this).children().find("._984949e5").text();
    // });

    return retObj;
  }))


  const zameenData5 = await Promise.all(
    title.slice(20,25).map(async (el) => {
    const $ = cheerio.load(el);

    var retObj = {};

    // $(".a71a1ca3").filter(function () {
    //   retObj.img = $(this)
    //     .children()
    //     .find("._219b7e0a")
    //     .children()
    //     .last()
    //     .attr("src");
    // });

    $(".f0349ab4").filter(function () {
      retObj.detailLink = $(this)
        .children()
        .find("._7ac32433")
        .attr("href");
    });

    retObj =await propertyImages.scrapePropetyImages(retObj.detailLink, browser)

    // $("._732aff15").filter(function () {
    //   retObj.price = $(this).children().find(".c4fc20ba").text();
    //   retObj.title = $(this).children().find(".c0df3811").text();
    //   retObj.location = $(this).children().find("._162e6469").text();
    //   retObj.propertyType = propertyType
    //   retObj.bedrooms = $(this).children().find("._984949e5").text().slice(0,1)
    //   retObj.washrooms = $(this).children().find("._984949e5").text().slice(1,2)
    //   retObj.landArea = $(this).children().find("._984949e5").text().slice(2)
    //   retObj.city = city
      
      // retObj.washrooms = $(this).children().find("._984949e5").text();
    // });

    return retObj;
  }))


  const c1 = zameenData.concat(zameenData2)
  const c2 = c1.concat(zameenData3)
  const c3 = c2.concat(zameenData4)
  const finalZameenData = c3.concat(zameenData5)



  browser.close();
  // console.log("zameen", zameenData.concat(zameenData2))

  return  {finalZameenData};
}

module.exports = {
  scrapeZameenData,
};
