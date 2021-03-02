const jwt = require('jsonwebtoken');
const config = require('config')
const mongoose = require('mongoose');
const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

// post schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true
    }
})
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this.id }, config.get('jwtPrivateKey'))
    return token;
}
const User = mongoose.model("User", userSchema)

const userValidation = user => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: new PasswordComplexity({
            min: 8,
            max: 50,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1
        })
    })
    return schema.validate(user)
}

exports.User = User;
exports.validation = userValidation;
