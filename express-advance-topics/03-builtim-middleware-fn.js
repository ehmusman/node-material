const express = require('express');
const Joi = require('joi')

const app = express()

app.use(express.json()) // if there is a json object it will populate the req.body property
// as we discussed that express has a few builtin middleware functions.
// another middlware function is urlencodded
app.use(express.urlencoded({ extended: true })) // urlencoded is a methood we call and it returns a middleware function. this middleware function parses incoming requests with url encoded payload. that is the request with body like this key=value&key=value.
// it is a most traditional approach and we dont use it these days. actually if we have an html form with input field when we submit the form the body of url look like this. so thats what we have urlencoded payload in the body of request  so this middleware parses this request body and populates req.body like a json object,

//  by adding extended:true we can sent complex objects and array through url.

/// static is also a middleware function whis is used to serve the static files.
app.use(express.static('public'))
// public is a folder and all of our static data will be inside it. like css, images, text files etc.
// localhost:3000/readme.txt    // we dont have to mention public in the url
const courses = [
    { id: 1, name: 'web dev' },
    { id: 2, name: 'web design' },
    { id: 3, name: 'machine learning' },
    { id: 4, name: 'matlab' },
    { id: 5, name: 'solidworks' },
    { id: 6, name: 'css' },
    { id: 7, name: 'react js' },
    { id: 8, name: 'javascript' },
    { id: 9, name: 'PHP' },
    { id: 10, name: 'MERN Stack' }
]

app.get('/', (req, res) => {
    res.send("Hello World!")
})



app.get('/api/courses', (req, res) => {
    res.send(courses)
})



app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the course with the given id is not present')

    res.send(course)
})




app.post('/api/courses', (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})
app.put('/api/courses/:id', (req, res) => {
    // lookup the course if not existing return the error 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the course with the given id is not present')
    //if exists, but not valid return 400, bad request
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // update course
    course.name = req.body.name;
    // return the update course
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    // lookup the course
    // not existing? return 404

    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the course with the given id is not present')

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1)

    // Return the same course
    res.send(course);
})


const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on Port ${port}...`))

const validation = (course) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}