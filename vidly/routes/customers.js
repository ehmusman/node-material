const express = require('express')
const mongoose = require('mongoose')
const Joi = require('joi')

// use router method from express
const router = express.Router()
//create customers schema
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

// getting the customers
router.get('/', async (req, res) => {
    const customer = await Customer.find().sort('name')
    res.send(customer)
})

// get single customer
router.get('/:id', async (req, res) => {
    // get specific single customer
    const customer = await Customer.findById(req.params.id)

    if (!customer) return res.status(400).send("The Customer with the given id is not present")
    res.send(customer)
})

// post customer request
router.post('/', async (req, res) => {
    const { error } = validation(req.body)
    // check for error
    if (error) return res.status(400).send(error.details[0].message)

    // find by id and update
    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    })
    customer = await customer.save();
    res.send(customer)

})

// update customer
router.put('/:id', async (req, res) => {
    const { error } = validation(req.body)
    // check for error
    if (error) return res.status(400).send(error.details[0].message)
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    }, { new: true });

    if (!customer) return res.status(400).send("The customer with thee given id is not present")

    res.send(customer);
})

// delete request
router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) return res.status(400).send("The Customer with the given id is not present")

    res.send(customer);
})

const validation = (customer) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean().required()
    })
    return schema.validate(customer)
}
module.exports = router;