const express = require('express')

const router = express.Router()

// making first home route
router.get('/', (req, res) => {
    res.send('Movies Genres')
})

module.exports = router;