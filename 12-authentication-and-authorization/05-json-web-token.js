// in login method we send simple true response like res.send(true) on valid authentication. but in real application we dont send only true value.
// we send Json web tokens in response
// json webtoken is a long string that is actually identified a user. as a metaphor we can think it like a driving liscence or a passport. its very similar to that

// when client is logins on the server the server send a long string json web token to the client which is like a passport or driving liscence and it give it to the client and tell them Hey next when you come back here to api end points you need to ensure your passport or driving liscence. its your id.
// so under client we need to store a JWT which is a long string so we can send it back to the server for future Api calls. and client may be a web application or a mobile application. if its a web application or building an application with angular or react we can use localstorage . in case of mobile app we have similar option depends on what platform we are using.
// go to jwt.io
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
// here is a real world example of json web token.
// this long string represents a json object. when we decode it we'll get a json object. this string has three parts with three colors and saperated by " . " .
// first part is red
// second part is purple
// third part is blue

// red part is header of json web tocken. this header part has two properties one is alg for algorithm represents the algorithm that we used to generate this tocken. and "type" is jwt(json web tocken)
// we dont worry about this header its a standard.
//purple color

// what matter to us second part.(payload)
// here we have a json object with three properties.
// 1- "sub" whic is a user id.
// 2- "name"
//3- "admin"
// this payload insculeds public properties about the users. like on passport we have name, date of birth, place of birth etc. these are also public properties.
// we can extract these properties from the tocken. every time when there is a request to the server user sends this info which we can extract. any one can set the value of admin to true. but we have some thing more about jwt.

// blue part
// the third pard which is blue is a digital signature. this digital signature is created on the base of above two along with the secret or private key. this secret or private key is only available on the server. if a mlacious user get the jwt and change the admin properties even than the digital signature will remain invalid because the content of json web token has been modified. now we need a new digital signature. but the hacker cannot generate this digital signature because they will need a private key which is only available on the server.if they dont access to the server, they cannot generate the valid digital signature. when they send a new generated jwt the server will declined it. the server will say this is not a valid json web tocken. this is how a json web tocken works.

// now install
// npm i jsonwebtoken

// const token = jwt.sign({ _id: user.id }, 'jwtPrivatekey')
//     res.send(token) 

// generate token and put it in jwt.io for decode. in payload we'll see two properties, _id which we sent and iat(for storing time and date) // so we can find the age of jwt with this.

// next we dont use private key here as itis. it will be dangerous for security.
// how can we store this private key in environment variables.?

