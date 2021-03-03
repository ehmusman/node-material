// the error middleware that we have added only catches error and happens a part of request processing pipeline. this is particular to express. if the error is thrown outside the context of express this middleware will not be call. if we add a line in index.js at outside the context to express. application will be crashed.
// throw new Error("Something failed during startup..")
// this error will not be logged in the logfile

// if we deploy it on the server application will be crashed and we'll not know what happened with it.
// we'll learn how to handle unhandled exception properly its for higher level and its not tied with express.

// remember process object.
// this process object is an event emitter it gives a method called on that is used to subscribe to an event. we have a special event in node is called 'uncaughtException' 
// when we have an exception in node process we'll handle that exception using a catch block, we'll handle it by a function which is a second argument of this process.on method like
// process.on('uncaughtException', (ex) => {
//     console.log("we got an uncaught exception...")
//     // now log it by using winston
//     winston.error(err.message, err)
// })

// this approach only used with synchronous code.