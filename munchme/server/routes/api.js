const { Router } = require('express');
const cakes = require('../controllers/cakes')
const cakeDetails = require('../controllers/cakeDetails')

const apiRoutes = Router()

apiRoutes.get('/cakes', cakes)
apiRoutes.get('/cakes/:id', cakeDetails)

module.exports = apiRoutes
