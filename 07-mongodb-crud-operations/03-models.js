const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));

//
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean

});

// we have created courses schema, now we have to compile this into a model. then what is a model?
// as we have learned earlier Human is a class, and usman is the instance of this class. similarly we created a class Course, and we'll create the instance of this class called nodeCourse. then we'll save it in the the DB. this is called Models. 
// mongoose object has a method called model. this model tales two arguments.the first argument is the singular name of the collection that the model is for. in mongodb collection we have created courses. we'll use its singular name.
// and secong argument is a schema that defines the shape of the argument.
// it will return a Course class in this application.

const Course = mongoose.model('Course', courseSchema);
// this is a class therefore we used Pascal notation.  now we r going to create an object based on this class.

const course = new Course({
    name: "nodejs mongodb",
    author: "H M Usman",
    tags: ['node', 'backend'],
    isPublished: true
})
// here is an interesting thing about mongo and nosql databases. we wrote in the document of mongodb a complex object.  here this tags property is an array of string, we dont have soomething like that in relational database.
// a row in relational database has a simple attribute if we want to madel this structure in relational database we'll need three tables. we simply create an object and put it in the database. we dont have to define the tables. that's why this is called schemaless. they dont have schema.