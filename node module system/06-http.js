// // one of the powerfull node module is HTTP module. that is used for creating netwok in our application. for example we can ctreate a webserver that listen for an HTTP reques on a given port. and with this we can easily create a backend service for our client application like for web application react or angular and for mobile application react native.  
// const http = require('http') 
// // http module has different classes. each class has a bunch of number of properties, methods and events.

// const server = http.createServer()
// // the amazing thing is that this server is an event emitter. and it has all the capabilities of event emitter that we have discused a little bit more. 
// // http.Server is inherit from net.server. and ner.Server is an event emitter. therefore we can say a bunch of node functionality is based on node events.

// // register the listener
// server.on('connection', socket => {
//     console.log('New Connection.....')
// }) // we use connection because this event is present in the documentation so we dont have to memorize these events. and second argument should be a call back function or an actual listener. this call back function has argument of socket  with no return (socket) => void
// server.listen(3000)
// console.log('Listening on port 3000...') // every time when there is a new connection than this will raise an event. so that we can use on method to handle that event. so before listening we have to register a listener or handeler.

// // in real life we r not going to use the connection event to create a server. this is on very low level.

///-----------------------------------------------------

const http = require('http');
// now we are passing a call back function to this createServer method. this function will take two parameters.
const server = http.createServer((req, res) => {
    // here instead of working with socket we'll working with req and res object.
    if(req.url ==='/') {
        // now we can send something to the client
        res.write("Hello World")
        res.end();
    }
    //for handeling backend services we have to handle different routes here. 
    if(req.url === '/api/courses'){
        // here we'll list different courses from data base as we saw in different APIs. from data base we'll get data in JSON. we'll format it in JSON.stringify(array of objects.)
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end();
        // building a webserver with node is very easy 
        // in real we are not going to use this http module to build the backend services of an application. the reason is that as we add more routes this code will become more complex . instead we'll use a framework like Express to handle this. it will help us to make code cleaner.
    }
})

server.listen(3000)

console.log('listening on port 3000......')