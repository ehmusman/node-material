
//------------------Extending event emitter--------------
// in real world its rare that we may deal with this event emitter object directly instead we create a class with all capabilities and use that class in our code.
// in 04-logger.js file we'll rise an event inside the function.
// const EventEmitter = require('events');

// // Register a listener 
// emitter.on('messageLogged', (org) =>{
//     console.log('Listener Called: ', org)
// }) 
// const log = require('./04-logger')
// log('hello') // we'll only got the message from the console. event emitter will not be called. the reason is that we have two different eventEmitters in two different files. to solve this we'll use class in 04-logger.js file.

/////////-------------------------------
const EventEmitter = require('events')
const Logger = require('./04-logger')
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) =>{
    console.log('Listener is Called : ', arg)
})
logger.log('Message')


//i m simplifying the whole work here.
// 1- first we create a new class of EventEmitter in saperate file like logger.js. 
// 2- than made a  Class lets say (Logger) which will extends the EventEmitter
// 3- in Logger class we'll raise an event using 'this.emit(message, argument)' keyword with any message like "messageLogger" and any argument might be in the form of an object inside a method like 'log(arg){}'
// 4- now export Logger class from that file.
// 5- in saperate file like(extending-event-emitter.js) we'll require the Logger class from logger.js file.
// 6- now made an instance from that class like 'logger = new Logger()'
//7- now register a listener with this instance like 'logger.on('messageLogged', ()=>{})'
// 8- call the 'log' method inside our class using the instance which we created like 'logger.log(argument)'