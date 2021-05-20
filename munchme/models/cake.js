const mongoose = require('mongoose')

module.exports.cakeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    id: String,
    quantity: Number,
})