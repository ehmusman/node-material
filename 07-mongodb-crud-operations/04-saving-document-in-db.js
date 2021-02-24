const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));

///////////
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean

});

/////////////////////
const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        name: "react mysql",
        author: "H M Usman",
        tags: ['javascript', 'frontend'],
        isPublished: true
    })
    const result = await course.save();
    console.log("Result: " + result);
}

createCourse();
// here we have a save method to save the document in db.
// it'll need some time to save the document. because it has to access the filesystem.
// that's why we are dealing with asynchronous operation.
// the result of this operation would be ready in the future. so this method returns a promise.

// so this await will need an async

// this result is the actual object which will save in the database. mongodb will assign it a unique id.

