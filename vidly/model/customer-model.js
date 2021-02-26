const mongoose = require('mongoose')
const Joi = require('joi')


const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        dafault: false
    }
})

// create Customer Model.
const Customer = mongoose.model("Customer", customersSchema);

// validation
const customerValidation = (customer) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean().required()
    })
    return schema.validate(customer)
}

exports.Customer = Customer;
exports.validate = customerValidation;