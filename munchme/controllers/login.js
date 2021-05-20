const User = require('../models/user')

module.exports = (req, res, next) => {
    const { email, password } = req.body
    User.findOne({ email, password }).then(user => {
        user ? res.status(200).json(user) : res.status(404).json(null)
    }).catch(next)
}