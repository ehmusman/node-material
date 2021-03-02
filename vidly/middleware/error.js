function error(err, req, res, next) { // here err is the exception which is coming froom the next(ex)
    res.status(500).send("Something Failed...")
}
module.exports = error