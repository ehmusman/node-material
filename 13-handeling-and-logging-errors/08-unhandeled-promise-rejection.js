//  the previous approach only used with synchronous code.
// if we have a promise some where and that promise is rejected  than the above code will not be executed.
// const p = Promise.reject(new Error("something failed miserable")) // this error will not be logged. it will crash the application.
// to solve this use another event emitter argument

// in index.js
// process.on('unhandledRejection', ex => {
//     console.log("we got an unhandeled rejection")
//     winston.error(ex.message, ex)
// })

// const p = Promise.reject(new Error("something failed miserably"));
// p.then(() => console.log("Done"))


// Note:

// in case on uncaught exception or unhandeled rejection ita a best practice to terminate the node process. because at this point the process can be at uncleaded state. as a best practice we should terminate the process and than restart it and make sure the process is at clean state.

// in production if the process is terminated and than how can we restart it? the tool for this is called process managers. and we'll learn about it.