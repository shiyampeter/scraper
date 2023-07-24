const Urls = require('./models/url');
const mongoose = require('mongoose');

const scraperObject = {
	//url: 'http://books.toscrape.com',
    url:  'https://www.therealreal.com',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        // Wait for the required DOM to be rendered
		await page.waitForSelector('.category-page');
		// Get the link to all the required books
		let urls = await page.$$eval('.image-gallery--full_width_image', links => {
			// Make sure the book to be scraped is in stock
			// links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			links = links.map(el => el.querySelector('a').href)
			return links;
		});
		let urls1 = await page.$$eval('.image-gallery--stack', links => {
			// Make sure the book to be scraped is in stock
			// links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			links = links.map(el => el.querySelector('a').href)
			return links;
		});
		// await page.waitForSelector('.foot-row');
		// // Get the link to all the required books
		// let urls2 = await page.$$eval('.foot-row__core-inner-cell .foot-row__core-inner-cell--secondary', links => {
		// 	// Make sure the book to be scraped is in stock
		// 	// links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
		// 	// Extract the links from the data
		// 	links = links.map(el => el.querySelector('a').href)
		// 	return links;
		// });
        const children = urls.concat(urls1);
        children.forEach(async element => {
            const value ={};
            value.site_name= 'https://www.therealreal.com';
            value.url= element;
            const url_data = new Urls(value)
            await url_data.save()
        });
      

		console.log(children);
		
	}
}

module.exports = scraperObject;