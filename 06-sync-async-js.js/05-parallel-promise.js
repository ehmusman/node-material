const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 1....')
        // resolve(1)
        reject(new Error(" because something failed"))
    }, 2000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2....')
        resolve(2)
    }, 2000)
})

// here we have a method in Promise object which takes the array of all promisses
// Promise.all([p1, p2])
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log("Error" + err.message))
// after
