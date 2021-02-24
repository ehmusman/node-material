const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log("Connected to mongodb database...."))
    .catch(err => console.log("rejected the connection to database" + err))

//
//// course schema
// some time builtin validators in mongoose does not give us the validation which we need. llok at tags property which is a string array. how can we validate that every row has atleast one tags? and we cannot use a required validator here.

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
    // tags: [String],
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v.length > 0
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