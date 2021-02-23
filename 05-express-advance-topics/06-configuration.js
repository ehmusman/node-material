// in previous we leant that how to detect the environment in which our code is running.
// the topic which goes hand in hand with environment is the topic of storing configuration setting of application. and overright these settings in different enviroments. for example in development environment we use different database on main server.
// for managing configuration there is a node package available and the most popular one is config.
// install it and create a folder called config on the root of this package. and create a file default.json. this is the default configuration setting for our app.
// also create development.json file. in this file we can overwrite the configuration of our app which we have defined in default.json file.
// we can also create a file called production.json

// each file has different configurations for our app for different environments.

// with this package wwe can set easilt the configuration of our app and also set the configuration for different environments. and it gives us a very clean structiure.


const config = require('config');
const express = require('express');
const Joi = require('joi')
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()


// here we'll do configuration of our app
console.log("Application Name: " + config.get('name'))
// run in terminal export NODE_ENV=development
// after running this app we'll see the name and mail service of our application which we have written in the development.json inside the config folder
console.log("Mail Srver: " + config.get('mail.host'))

// however we should not store the applicatioon secrets in this configuration file. because it will be dangerous for our security. to solve this problem we can use the environmental variables to store our passwords.
// create a file custom-environment-variables.json // and store your environment variable in this
console.log("Password: " + config.get('mail.password'))


if (app.get('env') === 'development') {
    console.log('this is a development env...')
    console.log('Morgan enabled')
    app.use(morgan('tiny'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(helmet());


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