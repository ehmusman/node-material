const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));
//

// schema is used to define the shape of documents within the collection of mongodb
// i created the database with name playground and collection name courses.
// a collection is mongodb is similar as tables in relational database.
// documents in mongodb is like rows in RDB.
// in relational databases we have tables and rows and in mongodb we have collection and documents.

// document is container of key value pairs. 
// in mongoose we have a concept called schema. this is specific to mongoose not with mongodb. we use schema to define the shape of document in mongodb collection. or we can say we use schema to define the shape of object with its data type. as we have discussed in interfaces with typescript. 
// let's learn how to create shcema.

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String], // in this array, tags will become key value pair with key is index and values is value.
    date: { type: Date, default: Date.now() },
    isPublished: Boolean

});// to create the instance of this class, pass the object in the parenthesis of Schema

// schema types are
// String, Number, Date, Buffer, Boolean, ObjectID, Array