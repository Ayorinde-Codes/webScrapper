const puppeeter = require('puppeteer');

const chalk = require('chalk')

const cheerio = require('cheerio');

import model from '../models';

const {Scrapper} = model;


class Scrap {

    static async Scrapper(req, res){

      let { url, company, item_class_name, price_class_name, parent_class_name } = req.body

      item_class_name= item_class_name.replace(/\./g,"")
      parent_class_name= parent_class_name.replace(/\./g,"")

        const browser= await puppeeter.launch()
        const page= await browser.newPage()
        await page.goto(url)
        await page.waitFor(1000);

        const content= await page.content();

        const $= cheerio.load(content)

        const results= [];

        $(`.${parent_class_name}`).each((idx, elem) =>{

            const item_name= $(elem).find(`.${item_class_name}`).text();
            const pricing= $(elem).find(`.${price_class_name}`).text();
            
            results.push({
                url,
                item_name,
                pricing
                
            })

            try{
            Scrapper.create({
                name: company,
                url: url,
                item: item_name,
                price: pricing
                })
            }
            catch(e){
                return res.send("unable to add to db")
            }
                
        })
        
        browser.close(); 
        
        return res.status(200).json({
            message:"Data Retieved successfully",
            result:results
        })
      }

  }

  export default Scrap;