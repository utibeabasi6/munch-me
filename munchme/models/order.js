const mongoose = require('mongoose')
const {cakeSchema} = require('./cake')

const orderSchema = new mongoose.Schema({
    buyerId: String,
    deliveryAddress: String,
    dateOrdered: {type: Date, default: Date.now},
    dateDue: Date,
    // dateDue: {type: Date, min: Date.now},
    isActive: {type: Boolean, default: true},
    items: [cakeSchema]
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order