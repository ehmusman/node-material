require('express-async-errors')
const config = require('config')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express'); // require express module
const mongoose = require('mongoose');
const genres = require('./routes/genres')
const movies = require('./routes/movies')
const home = require('./routes/home')
const customers = require('./routes/customers')
const rentals = require('./routes/rentals')
const users = require('./routes/users')
const auth = require('./routes/auth')
const error = require('./middleware/error')

if (!config.get("jwtPrivateKey")) {
    console.log("Fetal Error:  jwtPrivateKey is not defined")
    // then we need to exit the process
    process.exit(1) // 0 is for success other than 0 is for failure
    // nodemon will not exit the application. node will exit the application. nodemon still working even the application ceashes.
}
// connecting to database
mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to database...'))
    .catch(() => console.log('Refused conection to database....'));
//
const app = express(); // call the express method it will return an object
app.use(express.json());
app.use("/api/genres", genres)
app.use("/", home)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users)
app.use('/api/auth', auth)

// middleware function for handeling the exception
app.use(error)


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port} ....`))