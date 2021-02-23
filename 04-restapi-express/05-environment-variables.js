const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8])
})

// app.listen(3000, () => console.log('Listening on Port 3000....'))
// now what we need to improve in this code is hardcodded port number. we have used 3000 as an arbitrary number. its unlikely it gonna work in production environment. because when we deploy this application to hosting environment the port is dynamically assigned by the hosting environment. so we cant relay on 3000 available. so the way to fix this is by using environmental variable. so in hosting environment for node application we have an environmental variable called PORT
// environment variable is basically a variable that is a part of the environment in which the process runs. its value is said outside this application. so in this application we need to read the value of this PORT environment variable. and the way we do that is by using process object.

// we have this global object called process. this object has a property called env. this is a short for environment. and after that we add the name of our environment variable. in this case this is PORT
// setting the environment variale.
// run command in terminal export PORT=5000
// now the application listening port is 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`))
