const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Need a real normal people e-mail.')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must not be a negative number.')
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        required: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('There was an error.')
            }
        }
    }
})

module.exports = User