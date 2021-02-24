const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));

///////////
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean

});
/////////////////////
const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        // name: "react mysql",
        author: "Usman",
        tags: ['javascript', 'frontend'],
        isPublished: true
    })
    try {
        await course.validate();
        // const result = await course.save();
        // console.log("Result: " + result);
    } catch (excep) {
        console.log(excep.message)
    }
}

createCourse();

/////////////////////////////////
// Querying document
async function getCourses() {
    const courses = await Course
        .find({ author: 'Usman', name: /^nodejs/ })
        .limit(5)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    // .count()
    console.log("Courses: " + courses)
}

// getCourses()

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


///--------------------------------- regular expressions

// here is a problem that usman authors may be different
// we have to search the author with startname usman and end name bakhsh. to solve this we use reg expressions
// example is above


//-------------------count------------

// sometime we need only count of documents which have the mentioned conditioned. for this replace select with count


///----------------How to update document in mongodb database

async function updateCourse(id) {
    // there are two approaches to select the updating document
    // Approach : Querry first
    // findById()
    // Modify its properties
    //save()
    // const course = await Course.findById(id)
    // console.log("Old Course : " + course)

    // if (!course) return;
    // course.set({
    //     author: 'Farooq',
    //     isPublished: false
    // })


    // const result = await course.save();
    // console.log("Updated Course : " + result)
    // Approach : Update First
    // Update Directly
    // Optionally: get the updated document.
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: "Mosh",
            isPublished: true
        }
    }, { new: true })
    console.log(course)
}

// updateCourse('6035f7cce190ed1aeac090d2')

/////-------------------- Delete Document-------------
async function deleteDocument(id) {
    // const result = await Course.deleteOne({ _id: id })
    // const result = await Course.deleteMany({ _id: id })
    const result = await Course.findByIdAndRemove(id)

    console.log(result)
}
// deleteDocument('6035f8457f35311b4b18ae0e')
