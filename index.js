const browserObject = require('./browser');
const scraperController = require('./pageController');
const mongoose = require('mongoose');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

mongoose.connect(`mongodb+srv://shiyampeter:shiyam123@cluster0.dlumgnd.mongodb.net/scraper`).then(()=>{
   console.log("connected")
}).catch(err=>{
    console.log(err);
});

// Pass the browser instance to the scraper controller
scraperController(browserInstance)