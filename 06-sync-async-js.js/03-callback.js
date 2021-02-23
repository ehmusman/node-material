console.log('Before');
getUser(1, (user) => {
    console.log('ID : ' + user.id)
    console.log('username : ' + user.githubUsername)
})
console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from the database....')
        callback({ id: id, githubUsername: 'ehmusman' })
    }, 2000)
}