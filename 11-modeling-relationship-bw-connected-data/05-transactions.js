// in some relational databases like sql server or mysql we have the concept of transaction which basically means that a group of operation that should be performed as a unit called atomacity. either all these operations will complete and change the state of database. or if something failed in the middle all these operations has been applied will be rolled back and our database will be go back to the initial state. so in mongodb we dont have transaction as we have in relational databases.  but in mongodb we have a techniq called "Two Phase Commit". this is beyond from this course. to learn about it search it "mongodb 2phase commits"
// there is library that gives the concept of transaction but internally it implements this transaction using the two phase commits technique.
// npm i fawn
// the following code will be in rental.js module which is my vidly project
//
const Fawn = require('fawn');
Fawn.init(mongoose);
// now go to the post method and replace the following queries with the fawn methods.
/*
// rental = await rental.save();
// movie.numberInStock--;
// movie.save()
*/
try {

    new Fawn.Task()
        .save('rentals', rental) // 'rentals' write the exact collection name, because we r working directly with the collections. this is also case sensitive.
        .update('movies', { _id: movie._id }, {
            $inc: { numberInStock: -1 } // decrement number by one
        })// first argument is collection name. second argument is the identity on which we'll work. and third argument is update object
        // these are only two operations. we may have many operations
        // .remove()// this is also ap operation parameter
        .run() // finally .run
    res.send(rental)
} catch (ex) {
    res.status(500).send("Something failed")// 500 means internal server error
}
// this fawn library will automatically create a collection in mongodb. fawn library use this collection for two phase commits.
// when .run() command is run it add a new document to that collection which represents a transaction and then it executes each of the given operations independently. finally when all of the operations become complete it will delete the document from the created collection