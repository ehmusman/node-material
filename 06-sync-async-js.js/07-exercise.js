
async function exercise() {

    try {
        const customer = await getCustomer(1);
        console.log('Customer: ', customer)

        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log('Top movies: ', movies)
            await sendEmail(customer.email, movies);
        }
    } catch (err) {
        console.log("Error: " + err)
    }

}
exercise();

function getCustomer(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })

}

function getTopMovies() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    })

}

function sendEmail(email, movies) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Email sent...')
            resolve();
        }, 4000);
    })
}