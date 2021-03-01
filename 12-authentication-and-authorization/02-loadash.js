// post request for registering user is finished
// but here is a problem when we use following method
// res.send(user).
// users password also sends. but we dont want to send the users passwors. to solve this purpose we cen use this method by following way
// res.send({name: user.name, email: user.email})

// we also have a library lodash to solve this problem. lodash is the super version of underscore. its very powerfull and can handle with numbers, strings,objects and so on very smoothly.
//npm i lodash
// const _ = require('lodash')
// by convention we use it as _ .
// _ has a method _.pick(user, ["name",'email'])

// we pass a user object inside it and an array of properties which we want to pick. this will return a new object with the mentioned properties

// untill now we have sent password like 123456, if we want to enforce that strong password(password complixity) should be send we have an npm package built on Joi called joi-password-complixity. 
// npm install joi-password-complexity
