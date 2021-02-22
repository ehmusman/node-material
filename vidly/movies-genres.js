const Joi = require('joi'); // require joi module
const express = require('express'); // require express module

const app = express(); // call the express method it will return an object
app.use(express.json());

const genres = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
    { id: 6, name: 'Category 6' },
    { id: 7, name: 'Category 7' },
    { id: 8, name: 'Category 8' },
    { id: 9, name: 'Category 9' },
    { id: 10, name: 'Category 10' }
]

// making first home route
app.get('/', (req, res) => {
    res.send('Movies Genres')
})
// getting the movies genres // making second route
app.get('/api/genres', (req, res) => {
    res.send(genres)
})

// getting one movie genre
app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")
    else res.send(genre)
})

/// post request to add new data

app.post('/api/genres', (req, res) => {

    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre)
    res.send(genre)
})

app.put('/api/genres/:id', (req, res) => {
    // check the id if it exists
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // if exists but hte post condition is not satisfied than send the error of 400;
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // update the genre
    genre.name = req.body.name;

    // return the updated genre
    res.send(genre)
})

app.delete('/api/genres/:id', (req, res) => {
    // check the id if it exists
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // Delete
    const index = genres.indexOf(genre);
    genres.splice(index, 1)

    // Return the same genre
    res.send(genre);
})
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port} ....`))

const validation = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}