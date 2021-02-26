// in this module we have two models, Author and Course. Means two collections are used in same database
// here initiall Course has one property name. here we are going to add another property called author and it'll be refference to the author document in the database.
// we have a few helping function for 
// 1- createAuthor, 2- createCourse, and 3- listCourses 
//
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author" // here is the name of target collection
        // here in this author property we are storing an objectId that references an author document. but the point is that we r not having a proper relation ship here. we can store an impropper collection here and mongoose doesnt complain about that. now run the module again
    }
}));

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
        .find()
        .populate('author', 'name -_id') // in first argument is a path to the given property. this propert is of that model whose objectId is mentioned. in second argument we write the peoperties we want to include or exclude.
        // its also possible to populate multiple properties
        // lets suppose each course has a category and each category reference to category document. 
        // .populate('category', 'name')
        .select('name author');
    console.log(courses);
}

// create author function 
// first create an author. copy the id of that author and create course with passing the id of the created author

// createAuthor('Mosh', 'My bio', 'My Website');



// create a course and pass the create author id to this function
// at first time code running i didnt add the author property in the schematype. now add the property of author and add some properties to its shcema.
// createCourse('Node Course', '60392efdfe8425536c87c35e')



// now its time to get all the courses along with there authors
// set .select('name author')
// now we'll only get the auther the object id here. so in real world application we wanna load the auther document so that we can displat its name. here we'll use populate method.
listCourses();
// one last thing , in mongoose we dont have relationships for data integrity in a database. so it is possible to set the author document as invalid by changing to fake ObjectId