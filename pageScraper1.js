const Urls = require('./models/url');
const mongoose = require('mongoose');

const scraperObject = {
    url: 'https://us.vestiairecollective.com',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        // Wait for the required DOM to be rendered
		await page.waitForSelector('#__next');
		// await page.waitForSelector('.product-catalog_product__block__GGCGp');
        // return console.log(page)
		// Get the link to all the required books
		let urls = await page.$$eval('ul > li', links => {
			// Make sure the book to be scraped is in stock
			// links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			links = links.map(el => el.querySelector('a').href)
			return links;
		});
        
        urls.forEach(async element => {
            const value ={};
            value.site_name= 'https://us.vestiairecollective.com';
            value.url= element;
            const url_data = new Urls(value)
            await url_data.save()
        });
      

		console.log(urls);
		
	}
}

module.exports = scraperObject;