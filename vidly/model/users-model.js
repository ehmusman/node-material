const mongoose = require('mongoose');
const Joi = require('joi');


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
const User = mongoose.model("User", userSchema)

const userValidation = user => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(8).max(255).required()
    })
    return schema.validate(user)
}

exports.User = User;
exports.validation = userValidation;