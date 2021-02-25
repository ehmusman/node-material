const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/library')
    .then(() => console.log(" Connected to database successfull.."))
    .catch(err => console.log("something happened wrong.." + err))
//

// create bookScheme
const bookSchema = {
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50
    },
    author: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50
    },
    isPublished: {
        type: Boolean,
        require: true
    }
}

// creating Book class model
const Book = mongoose.model('Book', bookSchema)

// creating book
async function creatingBook() {
    const book = new Book({
        name: 'Physics',
        author: "Usman",
        isPublished: false
    })
    const result = await book.save();
    console.log("Saved Book: " + result)
}
creatingBook()