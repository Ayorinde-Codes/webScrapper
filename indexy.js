const puppeeter = require('puppeteer');

const cheerio = require('cheerio');

(async() => {
    const browser= await puppeeter.launch();
    const page= await browser.newPage();

    await page.goto('https://news.ycombinator.com/');

    const content =  await page.content();

    const $ = cheerio.load(content);

    const titles= [];

    $('.storylink').slice(0, 5).each((idx, elem) =>{

        const title= $(elem).text();

        titles.push(title);
    })

    browser.close(); 

    console.log(titles);
})

