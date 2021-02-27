const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/refrencing')
    .then(() => console.log("connected to database"))
    .catch(err => console.log('Could not connect to database..' + err))
//
// creating Author model
const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}))

// creating Vourse model
const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}))

// create author
async function createAuthor(name, bio, website) {
    const author = new Author({
        name, bio, website
    })
    const result = await author.save()
    console.log(result)
}

// calling the createAuthor function
// createAuthor("Usman", "web developer", 'http://usman.org')

// now write a function to create a course

async function createCourse(name, author) {
    const course = new Course({
        name, author
    })
    const result = await course.save()
    console.log(result)
}

// calling the createCourse function to create an author
// createCourse("Node js", "6039ebde9d6b8f175108a0ed")

// i have successfully created an author and course. in course objectId of author is included
// now its time for listing the course

async function listingCourse() {
    const course = await Course
        .find()
        .populate('author', 'name -_id')
        .select('name author')
    //
    console.log(course)
}

// calling the listingCourse function
listingCourse()
