const express = require('express');

const app = express();

const books = require('./routes/books')
const home = require('./routes/home')
// a middleware for post request
app.use(express.json())

app.use('/api/books', books);
app.use('/', home)

// connect to port
const port = process.env.PORT || PORT;
app.listen(port, () => console.log(`Listening to port ${port}...`))
