//const pageScraper = require('./pageScraper');
//const pageScraper = require('./pageScraper1');
const pageScraper = require('./pageScraper2');
// const pageScraper = require('./pageScraper3');

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		await pageScraper.scraper(browser);	
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)