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

const course = new Course({
    name: "nodejs mongodb",
    author: "H M Usman",
    tags: ['node', 'backend'],
    isPublished: true
})

/////////////////////