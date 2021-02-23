// here we'll deal with a real time type scnerio.
// i'll store the settimeout inside a function and will call that function from outside.

// to read the value of a user from database we can use three ways 
// Callbacks // Promises, // Async/await
console.log('Before');
const user = getUser(1)
console.log(user) // it will return undefined if i dont add retrn 1 in getuser function
console.log('After')

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from the database....')
        return { id: id, githubUsername: 'ehmusman' }
    }, 2000)
    return 1;
}