const puppeteer = require("puppeteer");

let scrollToBottom = require("scroll-to-bottomjs");

const cheerio = require("cheerio");

async function scrapePropetyImages(url, browser) {
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // await page.goto(`https://www.zameen.com${url}`);

    await page.goto(`https://www.zameen.com/new-projects/j_heights-2098.html`);


    // await page.evaluate(scrollToBottom);
    var objectToReturn = {}
    try {



        // Property Details ....................

        var propertyDetails = await page.evaluate(() => {

            return document.querySelector("._208d68ae").innerHTML
        });

        console.log("Property detail ", propertyDetails)

        var $ = cheerio.load(propertyDetails)

        $("li").each((i, el) => {
            const fieldName = $(el).find("._3af7fa95").text()
            const value = $(el).find("._812aa185").text()
            objectToReturn[`${fieldName}`] = value

            const fieldName2 = $(el).find(".eeb9af55").text()
            const arr = []
            const value2 = $(el).find("._0039d181 ._17984a2c").each((i, d) => {
                const data = $(d).text()
                arr.push(data)
            })
            const str = arr

            objectToReturn[`${fieldName2}`] = str

        })
        objectToReturn.Description = $("._892154cd").text()





        // Property Images ..................


        var propertyImages = await page.evaluate(() => {
            return document.querySelector(".image-gallery-thumbnails-container").innerHTML
        });

        $ = cheerio.load(propertyImages)

        const imgArray = [];
        $("._219b7e0a img").each((i, el) => {
            const val = $(el).attr("src");
            const index = val.indexOf("-")
            const retStr = val.slice(0, index + 1) + "800x600" + val.slice(index + 7)

            imgArray.push(retStr)
        })

        objectToReturn.propertyImages = imgArray

        objectToReturn.link = `https://www.zameen.com/${url}`





        // Property Title ...............


        var propertyTitle = await page.evaluate(() => {
            return document.querySelector(".b72558b0").innerHTML
        });

        $ = cheerio.load(propertyTitle)

        objectToReturn.Title = $("._64bb5b3b").text()
        objectToReturn.DetailLocation = $(".cbcd1b2b").text()




        //   Property Title ...............

        var postedBy = await page.evaluate(() => {

            return document.querySelector("._64cbb6c8").innerHTML
        });

        $ = cheerio.load(postedBy)

        objectToReturn.postedBy = $("._5a588edf").text()


        console.log("data", objectToReturn)


    }
    catch {

        objectToReturn.link = `https://www.zameen.com/${url}`
    
    }


    await page.close();


    return objectToReturn;

}

module.exports = {
    scrapePropetyImages,
};
