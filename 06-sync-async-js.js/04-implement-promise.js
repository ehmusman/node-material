console.log('Before');
// getUser(1, (user) => {
//     console.log('ID : ' + user.id)
//     console.log('username : ' + user.githubUsername)
//     getRepos(user.githubUsername, (repo) => {
//         repo.forEach(r => {
//             console.log(r)
//         })
//     })
// })


getUser(1)
    .then(user => getRepos(user.githubUsername))
    .then(repos => getCommit(repos[0]))
    .then(commit => console.log(commit[0]))
    .catch(err => console.log("Error: " + err))

console.log('After')

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from the database....')
            resolve({ id: id, githubUsername: 'ehmusman' })
        }, 2000)
    })
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Reading the ${username}'s Repos...`)
            resolve(['repo1', 'repo1', 'repo3'])
        }, 2000)
    })
}
function getCommit(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Reading the ${repo}'s commit...`)
            resolve(["commit"])
        }, 2000)
    })
}