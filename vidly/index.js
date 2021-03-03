const express = require('express'); // require express module
const winston = require('winston');
const app = express();

require('./startup/validation')();
require('./startup/routers')(app)
require('./startup/db')();
require('./startup/logging')();
require('./startup/config')();

const port = process.env.PORT || 3000

app.listen(port, () => winston.info(`Listening on port ${port} ....`))