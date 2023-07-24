const mongoose = require("mongoose");

const schema = new mongoose.Schema({  
    site_name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default:new Date()
    },   
})

const Urls = mongoose.model('urls', schema);

module.exports = Urls