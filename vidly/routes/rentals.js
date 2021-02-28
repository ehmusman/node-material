const express = require('express');
const { Movie } = require('../model/movies-model');
const { Customer } = require('../model/customer-model');
const { Rental, validation } = require('../model/rental-model');


const router = express.Router();


// querry for all rentals
router.get('/', async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals)
})

// post request for rentals
router.post('/', async (req, res) => {
    const { error } = validation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //querying for customer
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Customer is Invalid')

    // querying for movie
    const movie = await Movie.findById(req.body.movieId)
    if (!movie) return res.status(400).send("Movie is invalid")

    // check movie stock
    if (movie.numberInStock === 0) return res.status(400).send("Movie is out of stock....")

    // post for rental
    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
    rental = await rental.save();
    movie.numberInStock--;
    movie.save();

    // here is a problem. we have two saperate methods. rental.save() and movie.save(). its possible when first method is happened something went wrong in the database and our application crashed, or server crashed or connection to mongodb blocked. and perhaps second operation will not be completed. thats where we need a transaction. so with the transaction we ensure that both of the operations will update the state of our data in the database. or none of them will be applied. they both wil complete or they both will be rolled back. so in lot of databases we have this concept of transaction but in mongodb we dont really have transctions. there is a techniqe that is called  two phase commit. this is an advanced topic related to mongo. there is an npm package that can simulate a transaction. we'll study about it.
    res.send(rental)
})


// get a single rental
router.get('/:id', async (req, res) => {
    const rental = Rental.findById(req.params.id);

    if (!rental) return res.status(400).send("The Rental with the given id is not present")

    res.send(rental)
})

module.exports = router;