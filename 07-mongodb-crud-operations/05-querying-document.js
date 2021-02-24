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

// createCourse();

// Querying document
async function getCourses() {
    const courses = await Course
        .find()
        // .find({ author: 'Usman', name: 'nodejs mongodb' })
        .limit(5)
        .sort({ name: 1 }) // add any key value pair, 1 for ascending order, and -1 is for descending order
        .select({ name: 1, tags: 1 }) // here it shows we only want name and tags property.
    // this Course class has a bunch of methods(find, findById, findAndDelete etc) for quering the documents.
    // we can aslo filter here. add an object in find paranthesis and addd one or more key value pairs.
    // we can also sort our documents, we can also select a specific properties of our document..
    // let a course object have 50 properties and we dont want to sent all properties to the client. if we want to return only name. this find method return documentquerry object.
    console.log("Courses" + courses)
}

getCourses()