// here we have routes for getting the list of courses. we'll learn how we can get a route for a single course.
// to get a single course we have to add the id of the course in the url.
// like  /api/courses/1

const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8])
})
// app.get('/api/courses/:id', (req, res) => {
//     // its also possible to have different parameters in the route like /api/post/:year/:month
//     res.send(req.params.id)
// })

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params)
// })


// with express we can also get querry string parameters/. query string parameters are added in the url after queston mark
// for example get all the posts generated in 2018 and sort them by there name. we can use query string parameters to provide data to the backend services. 
// we use route parameters for essential required values and use query string parameters as optional. following code show that to read query string parameters

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`))
