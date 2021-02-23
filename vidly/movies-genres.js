const express = require('express'); // require express module

const genres = require('./routes/genres')
const home = require('./routes/home')
const app = express(); // call the express method it will return an object
app.use(express.json());

// route /api/genres
app.use("/api/genres", genres)

// home
app.use("/", home)


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port} ....`))