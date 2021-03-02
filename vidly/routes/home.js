const asyncMiddleware = require('../middleware/async')
const express = require('express')

const router = express.Router()

// making first home route
router.get('/', asyncMiddleware((req, res) => {
    res.send('Movies Genres')
}))

module.exports = router;