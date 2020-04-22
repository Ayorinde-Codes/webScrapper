const puppeeter = require('puppeteer');
// import puppeeter from 'puppeteer';

const cheerio = require('cheerio');


class Scrap {

    static async Scrapper(req, res){
      const { url, className } = req.body
      console.log(url)

    //   (async()=> {
          const browser= await puppeeter.launch()
          const page= await browser.newPage()
          await page.goto(url)

          const content= await page.content();

          const $= cheerio.load(content)

        //   console.log($)
        const titles= [];
        $('.storylink').slice(0 , 5).each((idx, elem) =>{

            const title= $(elem).text()

            titles.push(title)
        })

        browser.close(); 
        console.log(titles);






    //   } 
        // return User
        //   .create({
        //     name,
        //     username,
        //     email,
        //     password
        //   })
        //   .then(userData => res.status(201).send({
        //     success: true,
        //     message: 'User successfully created',
        //     userData
        //   }))

        return res.send(titles)
      }
  }

  export default Scrap;