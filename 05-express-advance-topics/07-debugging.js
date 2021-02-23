const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db');
// now we'll use these packages at the place of console.log

const express = require('express');
const Joi = require('joi')
const morgan = require('morgan');

const app = express()




// console.log() is very helpfull for debuggin and its actually a friend of javascript developers. but some time it becomes tidious because while debugging may be the console.log() is commented. and its value is not showing in terminal.

// the better way to log message for the purpose of debugging is to use the debug package in node.
// using debug we remove all the console.log statements and call a debug function. and then we use an environment variable for the purpose of debugging.
// we'll improve the code and will not comment out or remove the console.log statements we'll control them by an environment variable.
// we have an environment variable called DEBUG. we'll set its value in terminal according to desire. like app:startup, app:db etc for different types of debugging,

// export DEBUG=app:startup   // run this in terminal to set the DEBUG env variable. all the startupDebugger() will console their values.
// export DEBUG=app:db // run this in terminal, all dbDebugger will console their values,
// to run alll the debugger run export DEBUG=app:*
// to run multiple namespaces run export DEBUG=app:startup,app:db
// different debuggers will have different colors in the terminal to distinguish them easily.


// we can run application and debugger at the same time by using this command
// DEBUG=app:db nodemon index.js

// in real world its very rare to use different debugger in the same module so we use almost only one debugger name as debug. we have to preffer this module at the console.log.

startupDebugger('this is a development env...')

if (app.get('env') === 'development') {
    // startupDebugger('this is a development env...')
    startupDebugger('Morgan enabled')
    app.use(morgan('tiny'))
}
dbDebugger('Data base is connected')

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