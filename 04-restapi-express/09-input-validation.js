const express = require('express');
const Joi = require('joi')
// Joi return a class. therefore we have written it in capital case/ this module is depends upon two modules  joi and express.
// we have to first define a schema to use joi. schema is actually a shape of object.
// schema tells that an object has what properties and what values should be against these properties. like if a property is name than what should be the pattern of name. what should be the minimum characters of name. all the authentications which we have done in regular expressions can do with this joi schema.
const app = express()


app.use(express.json()) // here we are adding a piece of middleware. here express.json() method return a piece of middleware. and then we call app.use() to use that middleware in the requesting middleware pipeline. we're going to explain it briefly in later sections.


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
    if (!course) {
        res.status(404).send('the course with the given id is not present')
    }
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(req.body)
    // this  result will return an object and a value. if conditions will be satisfied than errror will be null and viseversa 
    console.log(result)

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`))
