const express = require('express');
const mongoose = require('mongoose')

const books = require('./routes/library')
const home = require('./routes/home')

// connect to database
mongoose.connect('mongodb://localhost/library')
    .then(() => console.log("Connected to database...."))
    .catch(err => console.log(`Failed connection to database, an error occured ${err}`))
const app = express();

// a middleware for post request
app.use(express.json())

app.use('/api/books', books);
app.use('/', home)

// connect to port
const port = process.env.PORT || PORT;
app.listen(port, () => console.log(`Listening to port ${port}...`))
