const Order = require('../models/order')

module.exports.ordersGet = (req, res, next) => {
    Order.find().then(orders => res.status(200).json(orders)).catch(next)
}

module.exports.ordersPost = (req, res, next) => {
    const {buyerId, deliveryAddress, dateDue, items} = req.body
    Order.create({buyerId, deliveryAddress, dateDue, items}).then(order => res.status(201).json(order)).catch(next)
}