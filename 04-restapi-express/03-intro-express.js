
// this is a code of http module. we have discussed about it earlier.
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World")
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]))
        res.end();

    }
})

server.listen(3000)

console.log('listening on port 3000......')

// this approach is not useable in real life. because if we ad more routes in our app the if else statements are increased and complaxity of app is also increased.
// at this point a framework appear in the picture called Express.
// this framework give our application a propper structure. so we can add more routes in our application while keeping the application code maintainable.
// there are various framewoks to create web application on top of node. but the most populer one is express.