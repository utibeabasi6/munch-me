const { Router } = require('express');
const signup = require('../controllers/signup')
const login = require('../controllers/login')

const authRoutes = Router()

authRoutes.post('/sign-up', signup)
authRoutes.post('/login', login)

module.exports = authRoutes