const Joi = require('joi');

const mongoose = require('mongoose');

// create schema
const booksSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        require: true
    },
    author: {
        type: String,
        minlength: 3,
        maxlength: 50,
        require: true
    },
    isPublished: {
        type: Boolean,
        require: true
    }
})

// create books model
const Book = mongoose.model('Book', booksSchema);

//validator function 
const booksValidation = (book) => {
    // data validation by using joi
    // writing schema
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        isPublished: Joi.boolean().required()
    })

    // validate schema
    return schema.validate(book);
}

exports.Book = Book;
exports.validate = booksValidation;