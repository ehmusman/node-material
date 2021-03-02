const jwt = require('jsonwebtoken');
const config = require('config')

function auth(res, res, next) {
    // take the token from the req header
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).send("Access Denied, No Token Provided")

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
        // put the payload in the user propertu inside the req
        req.user = decoded;

        // now in route handler we can access it by following way req.user._id
        // we have sent req to the user and now we need to pass control to the next middleware function in a request process pipeline. in this case this next middleware function is route handler
        next() // passing request to the next middleware fuction
    } catch (ex) {
        res.status(400).send('Invalid Token')// with this message we can troubleshoot he authentication issue.
        // here we are terminating the request response lifecycle
    }
    // it verify the token. if its valid it will decoded and returned the payload // if its not valid it will throw an exception so we need to use try catch block
}
module.exports = auth;