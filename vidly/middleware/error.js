const winston = require('winston')

module.exports = function (err, req, res, next) { // here err is the exception which is coming froom the next(ex)
    // logging error
    winston.error(err.message, err)

    res.status(500).send("Something Failed...")
}
