// // javascript promisses are very powerfull when they are dealing with javascript async code.
// // so what is a promise?
// // a promise is an object that holds the eventual result of an asynchronous operation. so when an asynchronous operation completes it gives the result either in a value or in error.
// // a promiose actually promise with us that it will give the result of asynchronous operation.
// // this object is in one of the three state.
// // when we create it, it is in the pending state. at this state it will kickup with some async operations. when the promise is ready the promise is either fulfilled means the async operation completed successfully. so here we are going to have a value.
// // otherwise if there is something wrong during async operation the result will be in the rejected state. and in this case we are going to have an error.

// // const p = new Promise(function (resolve, reject){});
// // this is a constructor function will take an argument. this argument is a function with two parameters. these parameters are resolve and reject.

// const p = new Promise((resolve, reject) => {
//     // kick of some async work
//     //... async func will have a value or an error. if it has a value we'll return this to the consumer of this promise.
//     // here both resolve and reject parameters are functions.

//     resolve(1) // in case of successfull  
//     // i real world we'll have a user object come from the database.
//     // reject('error') // in case of error

// });

// // when promise is fulfilled than we'll get its result in the following way
// p.then(result => console.log("Result: " + result)) // here is result is the valve which we get from resolve(value)

// // when promise is rejected than we'll get its result in the following way

// p.catch(result => console.log("Error: " + result)) // here is result is the valve which we get from reject(value)


// ///////////-----------------------------------------------------

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1) // pending => fulfilled
        reject(new Error("message")) // pending => rejected
    }, 2000)

})
p
    .then(result => console.log("Result: " + result))
    .catch(err => console.log("Error: " + err.message))


