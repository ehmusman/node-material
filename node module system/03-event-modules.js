

//----------------------Events Module----------

// one of the core concept in node is the concept of events. and most of the functionality of node is based on these events. an event is basically a signal which tells us that something is happened in the app. for example
// in node we have a class of HTTP that we use to build a webserver so we listen on a given port and every time when we receive a request on that port that HTTP class raises an event, now or job is to respond to that event (reading that request and respond a right event). several classes in node raises different kind of events. and in our code  we may be intersect with different types of responses. we'll learn how to work with diferent events.
const EventEmitter = require('events') // all upper case latters of each word indicates that this is a class. a class is a container of properties and functions which we call methods. 
// first we have to make an instance of  this class
const emitter = new EventEmitter();
// here this emitter is an object 
// what is the difference betwen a class and an object?
// Human is a class, 'Actually a Human(Person)' is an object 
// so a class defines the properties and behaviour of concept like Human.but object(usman) is an actual instance of that class. here EventEmitter is a class and emitter is an object . 
// this emitter has a bunch of methods, but we'll mostly used only two. 
// first is .emit() means produce some signal.

// Register a listener 
// emitter.addListener()// we have alis for this
emitter.on('messageLogged', (org) => { // org or e or event
    console.log('Listener Is Called', org)
})

// emitter.emit('messageLogged') // here we have raised an event but we also have to register a listner that can intersact with that event. listener is a function that will be called when this event will happen.

//-------------------Event Arguments -------------
// when we raise an event we send some data about that event for example in our logger module when we logged a message perhapps a remote login service will generate an id for that message perhaps one of that id for clients  or it may give us a url to access that message directly.
// emitter.emit('messageLogged', 1, 'url ') // here 1 and 'url' are events arguments// when we add more event arguments than its a good practice that those arguments should enclose inside the object. 
emitter.emit('messageLogged', {id: 1, url: 'http://'})// this object argument will be available where we'll register or event or at event listener

//------------=-------Practice for events----------------
const loggingEmitter = new EventEmitter();
loggingEmitter.on("loggingEvent", (org) =>{
    console.log('Logging Event is happening', org)
})

loggingEmitter.emit('loggingEvent', {id: 1, name: 'usman', email: 'usman@gmail.com'})
