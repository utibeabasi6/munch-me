const User = require('../models/user')
const jwt = require('jsonwebtoken')

function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET,)
}

function handleErrors(err, res) {
    const errors = { email: '', password: '' }
    if (err.message.includes('email')) {
        errors['email'] = err.message
    }
    if (err.message.includes('password')) {
        errors['password'] = err.message
    }

    res.status(400).json({ errors })
}

module.exports = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ user, token })
    } catch (err) {
        handleErrors(err, res)
    }
}

