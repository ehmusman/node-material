// require the express module. it will return a function
const express = require('express');

// call this function
// it will return an object called Express
// by convention we'll call this object app. this represents our application. this app function has a bunch of usefull methods. we have following methods
// app.get(), app.post(), app.put(), app.delete()


const app = express()
// here we are only using app.get() method.
// this method has two arguments. first is path and second is a callback function which will run when we call an http  request  at that end point.
// this call back function should have two arguments.(req, res)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8])
})

// as our application will grow we'll move different routes in different files. like courses will be moved in courses.js so that our application may have some skeleton or some structure.
app.listen(3000, () => console.log('Listening on Port 3000....'))
