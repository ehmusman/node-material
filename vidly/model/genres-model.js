const Joi = require('joi'); // require joi module
const mongoose = require('mongoose');

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


const genreValidation = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}

exports.Genre = Genre;
exports.validate = genreValidation;