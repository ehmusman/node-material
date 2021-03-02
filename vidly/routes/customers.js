const asyncMiddleware = require('../middleware/async')
const express = require('express')
const { Customer, validate } = require('../model/customer-model')
// use router method from express
const router = express.Router()

// getting the customers
router.get('/', asyncMiddleware(async (req, res) => {
    const customer = await Customer.find().sort('name')
    res.send(customer)
}))

// get single customer
router.get('/:id', asyncMiddleware(async (req, res) => {
    // get specific single customer
    const customer = await Customer.findById(req.params.id)

    if (!customer) return res.status(400).send("The Customer with the given id is not present")
    res.send(customer)
}))

// post customer request
router.post('/', asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body)
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

}))

// update customer
router.put('/:id', asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body)
    // check for error
    if (error) return res.status(400).send(error.details[0].message)
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    }, { new: true });

    if (!customer) return res.status(400).send("The customer with thee given id is not present")

    res.send(customer);
}))

// delete request
router.delete('/:id', asyncMiddleware(async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) return res.status(400).send("The Customer with the given id is not present")

    res.send(customer);
}))


module.exports = router;