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
        // match: /pattern/  // used for reqular expressions.
    },// required validator is one of the builtin validator in mongoose. this required propert is a boolean or a function which return a boolean.and this is usefull when we conditionally made a property required or not.
    // for example price is only required when the course is published.
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'] // used to define a few predefine characters/words that can be used.
    },
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },// we cannot use arrow function here because they donot have 'this' in their scope.
        min: 10,
        max: 200
    }

});


// make a class 

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: "react mysql",
        author: "Usman",
        category: 'web',
        tags: [],
        isPublished: true,
        price: 15
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