//let cmw = custome middleware

const log = (req, res, next) => { // middleware are function has three parameters. that middleware function parses the request body if there is a json object it sets "req.body" and than it passes the control to the next middleware function.
    console.log('Logging....')
    next()
}

module.exports = log;