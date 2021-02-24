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

// get published backend courses and sort then by their name
// async function getCourses() {
//     return await Course
//         .find({ isPublished: true, tags: 'backend' })
//         .sort({ name: 1 })
//         .select({ name: 1, author: 1 })

//     //
// }


// get all  published frontend and backend courses and sort them by their price in descending order  pick only their name and author and display them

// async function getCourses() {
//     return await Course
//         // .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
//         .find({ isPublished: true })
//         .or([{ tags: 'backend' }, { tags: 'frontend' }])
//         .sort({ price: -1 })
//         .select({ name: 1, author: 1, price: 1 })

//     //
// }


//////// get all the published courses that are of 15$ or more, or have the word 'by' in their title

async function getCourses() {
    return await Course
        // .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
        .find({ isPublished: true })
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
        .sort({ price: -1 })
        .select({ name: 1, author: 1, price: 1 })

    //
}

async function run() {
    const courses = await getCourses();
    console.log(courses)
}
run()