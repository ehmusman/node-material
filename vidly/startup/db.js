const winston = require("winston")
const mongoose = require('mongoose');


module.exports = function () {

    // connecting to database
    mongoose.connect('mongodb://localhost/vidly')
        .then(() => winston.info('Connected to database...'))
    // we are not using .catch here so that the unhandeled rejection should be handeled by a global process
}