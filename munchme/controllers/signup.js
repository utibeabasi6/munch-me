const User = require('../models/user');

module.exports = (req, res) => {
    const { name, email, password } = req.body
    User.create({ name, email, password }).then((user) => res.status(201).json(user)).catch(err => handleErrors(err, res))
}

function handleErrors(err, res) {
    console.log(err);
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
    res.status(400).json(errors)
}