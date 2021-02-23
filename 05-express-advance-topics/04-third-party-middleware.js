// go to expres.js
// in resourses there is an option of middleware
// a bunch of third party middleware is available in this section . each middleware can empact on the application performance

// Helmet  is an important middleware used to secure your app by setting various HTTP headers.

// morgan is also a middleware. its function is that every request going to server is ligged by it in terminal



const express = require('express');
const Joi = require('joi')
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(helmet());
app.use(morgan('tiny')) // this function log the info on termi nal on every request to the server.


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