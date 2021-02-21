const express = require('express');
const app = express()

app.use(express.json()) // here we are adding a piece of middleware. here express.json() mrthod return a piece of middleware. and then we call app.use() to use that middleware in the requesting middleware pipeline. we're going to explain it briefly in later sections.


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
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('NAme is required and should be minimum 3 character');
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
