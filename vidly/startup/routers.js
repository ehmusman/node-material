const express = require('express')
const genres = require('../routes/genres')
const movies = require('../routes/movies')
const home = require('../routes/home')
const customers = require('../routes/customers')
const rentals = require('../routes/rentals')
const users = require('../routes/users')
const auth = require('../routes/auth')
const error = require('../middleware/error')

module.exports = function (app) {
    app.use(express.json());
    app.use("/api/genres", genres)
    app.use("/", home)
    app.use('/api/customers', customers)
    app.use('/api/movies', movies)
    app.use('/api/rentals', rentals)
    app.use('/api/users', users)
    app.use('/api/auth', auth)

    // middleware function for handeling the exception
    app.use(error)

}