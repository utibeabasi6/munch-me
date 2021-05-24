const User = require('../models/user');
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    const { name, email, password } = req.body
    User.create({ name, email, password }).then((user) => {
        const token = createToken(user._id)
        res.status(201).json({ user, token })
    }).catch(err => handleErrors(err, res))
}

function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET,)
}

function handleErrors(err, res) {
    const errors = {
        name: '',
        password: '',
        email: ''
    }
    if (err.code === 11000) {
        errors['email'] = 'Email already exists'
    }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(error => {
            errors[error.properties.path] = error.properties.message
        })
    }
    res.status(400).json({ 'errors': errors })
}