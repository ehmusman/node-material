const express = require('express')
const Joi = require('joi'); // require joi module
const mongoose = require('mongoose');



const router = express.Router()

// create genres schema
const genresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        lowercase: true,
    }
})

// create a Genre class
const Genre = mongoose.model('Genre', genresSchema)


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

router.post('/', async (req, res) => {

    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let genre = new Genre({ name: req.body.name })
    genre = await genre.save();
    res.send(genre)
})

router.put('/:id', async (req, res) => {

    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })


    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

    // if exists but hte post condition is not satisfied than send the error of 400;

    // return the updated genre
    res.send(genre)
})

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id)
    // check the id if it exists
    if (!genre) return res.status(400).send("The Cours with the given id is not Present")

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
