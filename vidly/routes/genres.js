const auth = require('../middleware/auth')
const express = require('express')
const { Genre, validate } = require('../model/genres-model')

const router = express.Router()


// getting the movies genres // making second route
router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name')
    res.send(genres)
})

// getting one movie genre
router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id)

    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    else res.send(genre)
})

/// post request to add new data

router.post('/', auth, async (req, res) => {// auth is a middleware function it will pass control to the next route handler after validation. or terminate the process after invalid token

    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let genre = new Genre({ name: req.body.name })
    genre = await genre.save();
    res.send(genre)
})

router.put('/:id', auth, async (req, res) => {

    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })


    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // if exists but hte post condition is not satisfied than send the error of 400;

    // return the updated genre
    res.send(genre)
})

router.delete('/:id', auth, async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id)
    // check the id if it exists
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // Return the same genre
    res.send(genre);
})


module.exports = router;
