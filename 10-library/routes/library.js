const express = require('express');
const { Book, validate } = require('../model/books-model')


// get router from express
const router = express.Router();

// books route
router.get('/', async (req, res) => {
    const books = await Book
        .find()
        .sort('name')
    //
    res.send(books)
})
// get single book
router.get('/:id', async (req, res) => {
    // find book by id
    const book = await Book.findById(req.params.id)

    if (!book) return res.status(404).send("The Book with the given ID is not available in stock....")

    res.send(book)
})

// book post request
router.post('/', async (req, res) => {
    // destructuring result
    const { error } = validate(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    // create new book object
    let book = new Book({
        name: req.body.name,
        author: req.body.author,
        isPublished: req.body.isPublished
    })
    // save in db
    book = await book.save()
    // send response
    res.send(book);
})

// update book
router.put('/:id', async (req, res) => {


    // if book exists, but the new values are not valid, return error
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // get book
    const book = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        isPublished: req.body.isPublished
    }, { new: true })


    if (!book) return res.status(404).send("The Book with the given ID is not available in stock....")


    res.send(book)
})

// delete book
router.delete('/:id', async (req, res) => {
    // get book and delete it
    const book = await Book.findByIdAndRemove(req.params.id)

    // if book is not available
    if (!book) return res.status(404).send("The book with the given id is not present....")
    // send response
    res.send(book)
})



module.exports = router