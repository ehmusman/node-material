

const express = require('express');
const Joi = require('joi')
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()

// in a more complex and enterprise like application we should know that in what environment out code is running on.
// is this a development env or a production environment. perhaps we have to enable and disable certain features based on the current environment.
// process is a global object in node which access to the current process . his process obj has a property env which gives us the evvironment variable. nex we have a standard environment variable which is callled NODE_ENV. 
// process.env.NODE_ENV

// this environment variable rreturn the environment for this node application. if its not set we'll get undefined.
// alternatively we can set this from the outside as development, production, staging, testing etc.

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// app.get('env') // this method automatically under the hood use the above process env variable to detect the current environment.
// if this env variable is not set this will return the development environment by default.
// now check this


// console.log(`app: ${app.get('env')}`)// NODE_ENV = undefined, and this will return development.

// now here is  a scnerio. morgan is a third party middleware function its used to loging the response when a request is go towards  a server. here we want that this should only work in development environment.
if (app.get('env') === 'development') {
    console.log('this is a development env...')
    console.log('Morgan enabled')
    app.use(morgan('tiny'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(helmet());
// app.use(morgan('tiny')) // this function log the info on termi nal on every request to the server.


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