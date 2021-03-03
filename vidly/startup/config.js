const config = require('config')

module.exports = function () {
    if (!config.get("jwtPrivateKey")) {
        throw new Error("Fetal Error:  jwtPrivateKey is not defined")
        process.exit(1)
    }
}