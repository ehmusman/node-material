// in this module we have two models, Author and Course. Means two collections are used in same database
// here initiall Course has one property name. here we are going to add another property called author and it'll be refference to the author document in the database.
// we have a few helping function for 
// 1- createAuthor, 2- createCourse, and 3- listCourses
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
}));

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
        .find()
        .select('name');
    console.log(courses);
}

createAuthor('Mosh', 'My bio', 'My Website');

// createCourse('Node Course', 'authorId')

// listCourses();