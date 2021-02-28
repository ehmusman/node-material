const Joi = require('joi');
const mongoose = require('mongoose');
const { genresSchema } = require('../model/genres-model');

// moviesSchema
const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 255
    },
    genre: {
        type: genresSchema,
        require: true
    },
    numberInStock: {
        type: Number,
        min: 0,
        max: 255,
        require: true
    },
    dailyRentalRate: {
        type: Number,
        min: 0,
        max: 255,
        require: true
    }
})

const Movie = mongoose.model('Movie', moviesSchema)


const moviesValidation = movie => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).max(255).required(),
        dailyRentalRate: Joi.number().min(0).max(255).required()
    })
    return schema.validate(movie)
}

exports.validation = moviesValidation;
exports.Movie = Movie;