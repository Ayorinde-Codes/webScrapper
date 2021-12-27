# webScrapper
Scrapping Ecommerce website using Nodejs and sequelize

# Very short description of this Scrap Api tool
This is just a sample api using puppeteer and cheerio scraping ecommerce website for items and prices. It is also open for improvement, I hope someone finds this useful.
Goodluck.
Updates will be done occasionally.

Features
- Add to Scrapped data into Database(postgres)
- Save companyname, url, item name, and prices


# Migration
RUN:
Sequelize db:migrate

Getting Started There are two methods for getting started with this repo.

Download the .zip file. Extract the contents of the zip file then change directory to the file

Checkout this repo, install dependencies, then start the gulp process with the following:

```bash
git clone https://github.com/Ayorinde-Codes/webScrapper.git
cd webScrapper
npm install
npm start
create database(postgres): created db_name 

```
#sample Request using postman

```bash
URL: post({{URL}}/api/scrap)
body:
{ 
	"url":"https://www.ebay.com/b/Sony/bn_21835731?rt=nc&_dmd=2",
	"company": "Ebay",
	"parent_class_name": "s-item",
	"item_class_name": "s-item__title",
	"price_class_name": "s-item__price"
}
```

