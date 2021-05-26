const Order = require('../models/order')
const mailgun = require("mailgun-js");


module.exports.ordersGet = (req, res, next) => {
    Order.find().then(orders => res.status(200).json(orders)).catch(next)
}

module.exports.ordersPost = (req, res, next) => {
    const { buyerId, deliveryAddress, dateDue, items } = req.body
    Order.create({ buyerId, deliveryAddress, dateDue, items }).then(order => {
        const DOMAIN = "sandbox3a247f8cbb984de4b290d53a321b4109.mailgun.org";
        const APIKEY = " f13f1838172c5ef2a2e6e24a049e46e7-fa6e84b7-a7d672cd"
        const mg = mailgun({ apiKey: APIKEY, domain: DOMAIN });
        const data = {
            from: "Mailgun Sandbox <postmaster@sandbox3a247f8cbb984de4b290d53a321b4109.mailgun.org>",
            to: "utibeabasiumanah6@gmail.com",
            subject: "Hello",
            template: "munchme",
            'h:X-Mailgun-Variables': { test: "test" }
        };
        mg.messages().send(data, function (error, body) {
            console.log(body);
            console.log(error);
        });
        res.status(201).json(order)
    }).catch(next)
}