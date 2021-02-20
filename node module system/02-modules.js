
///////---------------------------------------------------------------------------------------------
// console.log(module)// module word itself a global
// any function which is created behaves as a global scope. so we should avoid to write the same functions name write more than one time in different files. this will overwrite the previous function. every file is node is called a module. every function and variable defined in that file acts like a module. they are like private functions in classes. if we want to make them public we have to export them to make them public. every node application should have atleast one file and one module.


///**** */ in node every file is a module and variable and functions are defined in that file are scope to that module.they are not available outside of that model.


//-------------------Creating a module----------------

// var log = require('./logger')

// console.log(log('message'))


//--------------------Built in Modules---------------


//----------path module----------------------

// const path = require('path')
// var pathObj = path.parse(__filename)
// console.log( pathObj)

//---------OS module-----------------

// const os = require('os')

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory = '+ totalMemory)
// console.log(`Free Memory = ${freeMemory}`)

//// these are simple example with two or more demos we can do many things by using modules. see in documentation


//---------------------------------file system module--------------

// const fs = require('fs')

// every operation comes after  fs.(----) comes in two forms. synchronous and blocking, asynchronous and non blocking.
// const files = fs.readdirSync('./');
// console.log(files)
// fs.readdir('./', (err, files) => {
//     // first argument is an error and second argument is an array of files. 
//     if(err) console.log('Error: '+ err)
//     else console.log('Result: '+ files)
// }) //  all the async methods take a function as a last argument. node call this function when the synchronous operation completes.
