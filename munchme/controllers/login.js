const User = require('../models/user')

module.exports = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email, password }).then(user => {
        user ? res.status(200).json(user) : res.status(404).json({ 'error': 'User does not exist' })
    }).catch(err => {
        res.status(400).json({ error: 'An error occurred' })
    })
}