console.log('Before');

async function displayResult() {
    try {

        const user = await getUser(1);
        const repos = await getRepos(user.githubUsername);
        const commit = await getCommit(repos[0])
        console.log(commit[0])
    } catch (err) {
        console.log("Error: " + err.message)
    }
}
displayResult();

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
            // resolve(['repo1', 'repo1', 'repo3'])
            reject(new Error('Could Not Get Repos'))
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