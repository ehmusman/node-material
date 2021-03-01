const express = require('express');
const { User, validation } = require('../model/users-model')
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    // check for if user is alreaady exist
    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send("User already exists")

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    res.send(user)
})

module.exports = router;