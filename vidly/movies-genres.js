const express = require('express'); // require express module
const mongoose = require('mongoose');
const genres = require('./routes/genres')
const home = require('./routes/home')
const customers = require('./routes/customers')
// connecting to database
mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to database...'))
    .catch(() => console.log('Refused conection to database....'));
//
const app = express(); // call the express method it will return an object
app.use(express.json());

// route /api/genres
app.use("/api/genres", genres)

// home
app.use("/", home)

// router /api/customers
app.use('/api/customers', customers)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port} ....`))