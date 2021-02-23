const express = require('express')
const Joi = require('joi'); // require joi module

const router = express.Router()

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


// getting the movies genres // making second route
router.get('/', (req, res) => {
    res.send(genres)
})

// getting one movie genre
router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")
    else res.send(genre)
})

/// post request to add new data

router.post('/', (req, res) => {

    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre)
    res.send(genre)
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    // check the id if it exists
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // Delete
    const index = genres.indexOf(genre);
    genres.splice(index, 1)

    // Return the same genre
    res.send(genre);
})


const validation = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}

module.exports = router;
