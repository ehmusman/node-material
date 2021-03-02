const express = require('express');
const asyncMiddleware = require('../middleware/async')
const { User } = require('../model/users-model')
const bcrypt = require('bcrypt')
const router = express.Router();
const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

router.post('/', asyncMiddleware(async (req, res) => {
    const { error } = validation(req.body)
    console.log(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    // check for if user is alreaady exist
    let user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("invalid email or password.")

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password")
    // req.body.pasword is a plain text password which is sent by user. and user.password is the encrypted passwword which was stored in database. if both are equal it will return true.
    const token = user.generateAuthToken()
    res.send(token)
}))

const validation = req => {
    const schema = Joi.object({
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
    return schema.validate(req)
}

module.exports = router;    