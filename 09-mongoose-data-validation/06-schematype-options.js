const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercise1')
    .then(() => console.log("Connected to mongodb database...."))
    .catch(err => console.log("rejected the connection to database" + err))

//
//// course schema
// we can write the schema properties type directly  as
// name: String or by the following method
// name: { type: String, required: true} // this object has a few properties that we have learned a few about them. we'll learn more properties ot this schema type object.
// for string we have three additional properties that we can use.
// lowercase: true, uppercase: true, trim: true

// for Numbers we have two properties
// get: v=> Math.round(v),
// set: v => Math.round(v)s


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/ 
        lowercase: true,
        // uppercase: true,
        // trim: true,
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
        max: 200,
        get: v => Math.round(v), // let if i manually changed the value from database in decimal. when we get this value this get function will work and give us the value after implementing Math.round() function on it.
        set: v => Math.round(v),// inserted number is 15.8, stored number wil be 16
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
        for (field in ex.errors) {
            // console.log(ex.errors[field])
            console.log(ex.errors[field].message)

        }
    }
}

createCourse();