const mongoose = require('mongoose');

// this object has a method called connect 

// mongoose.connect('mongodb://localhost')

// this is called a connection string. when we are going to deploy this on server we'll definatel use different connection string. this connection string is ony for the us on local machine.

// we'll also configure it for running in diferent environments. as we have done it already. then we donot have to hardcoded the connection string here. but in real world application the connection string should come from a configuration file.
// after localhost we use the name of our database. if we write the name of database which we didnt created yet, than mongodb will automatically create it for us.

// this connect method will return a promise.

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to the MongoDb..."))
    .catch(err => console.error("Could not connect to the MongoDb....." + err));