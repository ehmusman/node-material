const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/embedding')
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
    author: {
        type: authorSchema,
        required: true
    }// here this is a subdocument inside the document.
    // we are not using the reference of this

}))

// create course 

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

// createCourse('Node Course', new Author({ name: 'Usman', bio: 'web developer', website: 'http://usman.org' }));

//update author. which is in the sub document
async function updateAuthor(courseId) {
    const course = await Course.findById(courseId)
    course.author.name = "Usman Bakhsh"
    course.author.bio = "Website dev"
    course.author.website = "Usmanbakhsh.net"
    course.save()
    console.log(course)
}
updateAuthor("6039f866d33b5b22730e7fc8")