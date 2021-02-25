const express = require('express');

const Joi = require('joi');


// books list
const books = [
    { id: 1, name: 'physics', author: 'usman', isPublished: false },
    { id: 2, name: 'chemistry', author: 'farooq', isPublished: true },
    { id: 3, name: 'math', author: 'ehsan', isPublished: false }
]

// get router from express
const router = express.Router();

// books route
router.get('/', (req, res) => {
    res.send(books)
})
// get single book
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) {
        res.status(404).send("The Book with the given ID is not available in stock....")
    }
    res.send(book)
})

// book post request
router.post('/', (req, res) => {
    // destructuring result
    const { error } = validation(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    // create new book object
    const book = {
        id: books.length + 1,
        name: req.body.name,
        author: req.body.author,
        isPublished: req.body.isPublished
    }
    // add book in the list
    books.push(book);
    // send response
    res.send(book);
})

// update book
router.put('/:id', (req, res) => {
    // check the book if its available
    const book = books.find(b => b.id === parseInt(req.params.id))

    if (!book) return res.status(404).send("The Book with the given ID is not available in stock....")

    // if book exists, but the new values are not valid, return error
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // update book
    book.name = req.body.name;
    book.author = req.body.author;
    book.isPublished = req.body.isPublished;

    res.send(book)
})

// delete book
router.delete('/:id', (req, res) => {
    // check if book is available
    const book = books.find(b => b.id === parseInt(req.params.id))

    // if book is not available
    if (!book) return res.status(404).send("The book with the given id is not present....")

    // get the index of book
    const index = books.indexOf(book)

    // delete book
    books.splice(index, 1)

    res.send(book)
})


//validator function 
const validation = (book) => {
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

module.exports = router