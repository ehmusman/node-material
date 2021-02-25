const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));

///////////
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true }, // this syntax is used to make the value required.
    /// interesting thing is that this validation is only in mongoose. mongodb does not care about it. comparatively in SQL db we can implement  validation at database level. means a row will not be filled without the value of course etc. we can also use Joi for validation. but we use Joi at first attack. means user who is sending data should be accurate. and this validation will also create more validity.
    // because its a possibility that the client sent us a correct data but we some how during creating object missed the name property. so dual validation is very helpfull.
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean

});

// here i have created Schema. mongo db doesnot care if i sent object with out the mentioned properties. mongodb can fill the document with empty objects

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
