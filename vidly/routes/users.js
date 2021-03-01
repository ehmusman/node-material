const express = require('express');
const { User, validation } = require('../model/users-model')
const _ = require('lodash');
const bcrypt = require('bcrypt')
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    // check for if user is alreaady exist
    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send("User already exists")

    user = new User(_.pick(req.body, ['name', 'email', 'password']))

    // hashing password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()

    res.send(_.pick(user, ['_id', 'name', 'email']))// now password will not be sent
})

module.exports = router;