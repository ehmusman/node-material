require('express-async-errors')
require('winston-mongodb')
const winston = require("winston")
module.exports = function () {
    winston.handleExceptions(
        new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    )
    process.on('unhandledRejection', ex => {
        throw ex
    })
    winston.add(winston.transports.File, { filename: 'logfile.log' })

    winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly', level: 'error' })

}