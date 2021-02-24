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
        author: "Usman",
        tags: ['javascript', 'frontend'],
        isPublished: true
    })
    const result = await course.save();
    console.log("Result: " + result);
}

// createCourse();

/////////////////////////////////
// Querying document
async function getCourses() {
    const courses = await Course
        // .find({author: 'H M Usman', name: 'nodejs mongodb'})
        // start with usman
        // .find({author: /^usman/ })

        // end with bakhsh
        // .find({author: /usman$/i })

        // contain usman
        .find({ author: /.*usman.*/ })

        .limit(5)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log("Courses" + courses)
}

getCourses()

///////////////////comparison query operator.
// in mongodb we have a bunch of operator for comparing. since mongoose is build on the top of mongodb driver so the comparing operators of mongodb can also be understanded by mongoose.
// comparison operators are as follow
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to )
// in
// nin (not in)
// their implementation is above


////////////////// logical operators
// or
//and
// their implementation is above


/// regular expressions

// here is a problem that usman authors may be different
// we have to search the author with startname usman and end name bakhsh. to solve this we use reg expressions
// example is above