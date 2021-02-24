const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log("Connected to mongodb database...."))
    .catch(err => console.log("rejected the connection to database" + err))

//
//// course schema

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/ 
    },// required validator is one of the builtin validator in mongoose. this required propert is a boolean or a function which return a boolean.and this is usefull when we conditionally made a property required or not.
    // for example price is only required when the course is published.
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },
        min: 10,
        max: 200
    }

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
