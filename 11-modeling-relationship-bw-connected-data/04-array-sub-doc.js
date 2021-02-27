const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/emb-array')
    .then(() => console.log('connected to database'))
    .catch(err => console.log("Could not connect to database" + err))
//
const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

const Author = mongoose.model("Author", authorSchema)

const Course = mongoose.model("Course", new mongoose.Schema({
    name: String,
    authors: {
        type: [authorSchema],
        required: true
    }// here this is a subdocument inside the document.
    // we are not using the reference of this

}))

// create course 

async function createCourse(name, authors) {
    const course = new Course({
        name,
        authors
    });

    const result = await course.save();
    console.log(result);
}

// createCourse('Node Course', [
//     new Author({ name: 'Usman', bio: 'web developer', website: 'http://usman.org' }),
//     new Author(
//         { name: 'Farooq', bio: 'facebook speciality', website: 'http://usman.org' }
//     )
// ]);

// we can add more authors in the already present array
async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId)
    course.authors.push(author);
    course.save();
}
// addAuthor("6039fbe2739b5824ced08ba8", new Author({ name: 'Ehsan', bio: 'instrumentation', website: 'http://ehsan.org' }))

// remove author
async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId)
    const author = course.authors.id(authorId);
    author.remove();
    course.save()
    console.log(author)
}
removeAuthor("6039fbe2739b5824ced08ba8", "603a06bd4eb12726bc52f8cc")