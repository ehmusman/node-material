// we decided to protecting the operations that modifying data and make them available only for autheticating users.
// in genres module we have a post method. this should only be called when the user is authenticated.
// for this purpose we have to check authentication by following way
// app.post('/', async(req,res) => {
// const token = req.header('x-auth-token')
// here we'll check the cradibility of the token if its valid then persure the ramaining methods. otherwise send the response res.send(401) // 401 means the client doesnt have the authenticated credentials to access this.
// })
// we dont want to repeat this at the begining of every route handeler to modify data. so we have to put this logic in the middleware function. we'll put this logic in midleware funcition and then we'll apply that functions on route handler that need to modify data.
// create a folder named as middleware and ccreate a file named as auth.js inside this folder. here we'll create a middleware function for authentication. 


// const jwt = require('jsonwebtoken');
// const config = require('config')

// function auth(res, res, next) {
//     // take the token from the req header
//     const token = req.header('x-auth-token')
//     if (!token) return res.status(401).send("Access Denied, No Token Provided")

//     try {
//         const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
//         // put the payload in the user propertu inside the req
//         req.user = decoded;

//         // now in route handler we can access it by following way req.user._id
//         // we have sent req to the user and now we need to pass control to the next middleware function in a request process pipeline. in this case this next middleware function is route handler
//         next() // passing request to the next middleware fuction
//     } catch (ex) {
//         res.status(400).send('Invalid Token')// with this message we can troubleshoot he authentication issue.
//         // here we are terminating the request response lifecycle
//     }
//     // it verify the token. if its valid it will decoded and returned the payload // if its not valid it will throw an exception so we need to use try catch block
// }
// module.exports = auth;