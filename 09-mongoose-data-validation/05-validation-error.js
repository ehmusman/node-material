const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log("Connected to mongodb database...."))
    .catch(err => console.log("rejected the connection to database" + err))

//
//// course schema
// here we'll discuss the exception error deeply.

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/ 
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: { // this propert is used for custome validation.
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result)
                }, 4000)
            },
            message: " A course should have atleast one tag"
        }
    },

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

async function createCourse() {
    const course = new Course({
        name: "react mysql",
        author: "Usman",
        category: '-',
        tags: [],
        isPublished: true,
        price: 15
    })
    try {
        await course.validate();
        // const result = await course.save();
        // console.log("Result: " + result);
    } catch (ex) {
        // console.log(ex.message)
        // this ex object has a property object called error.
        // this error object also has the properties that are invalid according to our schema. means these properties can be changed according to change in validation error.
        // if i put category='-' and tags=[], then this error object will have two properties
        // so we can iterate over these properties to get more details about the error.
        for (field in ex.errors) {
            // console.log(ex.errors[field])
            console.log(ex.errors[field].message)

        }
    }
}

createCourse();