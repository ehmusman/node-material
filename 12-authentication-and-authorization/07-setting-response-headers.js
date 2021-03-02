// in current implementation when a user logs in with generate a json web token and return it in the body of the response.
// lets imagine when a user registered we assume him logged in. so they wnna have to login saperately. so this requirement does not apply to every aapplication. sometime we enforce the user to verify email address. after they signup we sent them an email where they click on a link so this process is different. lets imagine
// vidly is an application that runs locally ina video store and the people who use this application are people who work in this video store. we dont need to verify there email address so the first day when they join the store they need to create an account and they logged in. 
// in users.js there is a post method to register a new user and we are returning a response just like(with these properties )
// res.send(_.pick(user, ['_id', "name", "email"]))
// we can add a json web token as another property but it will look like a little bit ugly because its not a property of a user. the better approch is to send the json web token in http header. just like we have headers in the request we also  have headers in a response object. in users module before we send the response to the client generate a token in the way

// const token = jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'))
// res.header('x-auth-token', token).send(_.pick(user, ['_id', "name", "email"]))

// now in short the mechanism is that we store the json web token inside the header of response. so in our client app when we register a user we can read this header we can store this json web token on the client and next time we are going to make an API call we'll send this to the server.