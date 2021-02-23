console.log('Before');
getUser(1, (user) => {
    console.log('ID : ' + user.id)
    console.log('username : ' + user.githubUsername)
    getRepos(user.githubUsername, (repo) => {
        repo.forEach(r => {
            console.log(r)
        })
    })
})

console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from the database....')
        callback({ id: id, githubUsername: 'ehmusman' })
    }, 4000)
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log(`Reading the ${username}'s Repos...`)
        callback(['repo1', 'repo1', 'repo3'])
    }, 2000)
}