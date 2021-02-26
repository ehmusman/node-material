const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: authorSchema,
        required: true
    }
}));

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}


// createCourse('Node Course', new Author({ name: 'Usman' }));
// now we have author is an embedded or subdocument with properties name and id. rhese subdocuments are like normal documents. so most of the features thar are available in normal documents are also available in sub documents. for example we can do validation here. like author.name should be required. but these documents cannot be saved under own, but these can be saved under the context of its parent. so now change the name of this author

async function updateAuthor(courseId) {
    // const course = await Course.findById(courseId);
    // course.author.name = "Usman Bakhsh"
    // course.save();
    // we can also update the subdocument directly 
    // so instead of querrying it first we can updated directly in the database. so now modify this course

    const course = await Course.update({ _id: courseId }, {
        // $set: {
        //     'author.name': "Ehsan Bakhsh"
        // }
        $unset: {
            'author': ''
        }
    })// so now we update it directly in the database
    // to remove the subdocument we can use the unset operator
}
updateAuthor("60393cce81d0655c37bffc55")