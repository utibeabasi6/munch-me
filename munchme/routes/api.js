const { Router } = require('express');
const cakes = require('../controllers/cakes')
const cakeDetails = require('../controllers/cake_details')
const { ordersGet, ordersPost } = require('../controllers/orders')

const apiRoutes = Router()

apiRoutes.get('/cakes', cakes)
apiRoutes.get('/cakes/:id', cakeDetails)
apiRoutes.get('/orders', ordersGet)
apiRoutes.post('/orders', ordersPost)

module.exports = apiRoutes
