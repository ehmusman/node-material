const express = require('express');
const { Genre } = require('../model/genres-model');
const { Movie, validation } = require('../model/movies-model');

const router = express.Router();

// querrying the all movies
router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('title')
    res.send(movies)
})

//query for single movie
router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    if (!movie) return res.status(400).send("The movie with the given id is not present")
    res.send(movie)
})
// post movie

router.post('/', async (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = await Genre.findById(req.body.genreId)
    if (!genre) return res.status(400).send("invalid genreId")

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })
    movie = await movie.save()
    res.send(movie)
})

// put request
router.put('/:id', async (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = await Genre.findById(req.body.genreId)
    if (!genre) return res.status(400).send("invalid genreId")

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    }, { new: true })
    res.send(movie)
})

// delete request
router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    if (!movie) return res.status(400).send("the movie with the given id is not present....")
    res.send(movie)
})


module.exports = router;