const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        lowercase: true,
        minlength: [6, 'Password must be more than 6 characters']
    }
})

userSchema.pre('save', (next) => {
    this.password = 'password'
    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User