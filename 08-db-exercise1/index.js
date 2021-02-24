const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log("Connected to mongodb database...."))
    .catch(err => console.log("rejected the connection to database" + err))

//
//// course schema

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    isPublished: Boolean,
    date: Date,
    tags: [String]
});

// make a class 

const Course = mongoose.model('Course', courseSchema);

// get courses
async function getCourses() {
    return await Course
        .find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 })

    //
}

async function run() {
    const courses = await getCourses();
    console.log(courses)
}
run()