const Urls = require('./models/url');
const mongoose = require('mongoose');

const scraperObject = {
	//url: 'http://books.toscrape.com',
    url:  'https://www.thredup.com',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        // Wait for the required DOM to be rendered
		await page.waitForSelector('.content');
		//await page.waitForSelector('.mY1BAiw8bn30xB6tJBCG');
		// Get the link to all the required books
		let urls = await page.$$eval('.mY1BAiw8bn30xB6tJBCG', links => {
			// Make sure the book to be scraped is in stock
			// links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			links = links.map(el => el.querySelector('a').href)
			return links;
		});
        
        // urls.forEach(async element => {
        //     const value ={};
        //     value.site_name= 'https://www.thredup.com';
        //     value.url= element;
        //     const url_data = new Urls(value)
        //     await url_data.save()
        // });
      

		console.log(urls);
		
	}
}

module.exports = scraperObject;