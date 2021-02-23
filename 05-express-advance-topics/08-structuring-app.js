const debug = require('debug')('app:startup')
const config = require('config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()




// here we'll do configuration of our app
debug("Application Name: " + config.get('name'))
debug("Mail Srver: " + config.get('mail.host'))
debug("Password: " + config.get('mail.password'))



if (app.get('env') === 'development') {
    debug('this is a development env...')
    debug('Morgan enabled')
    app.use(morgan('tiny'))
}



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet());
app.use('/api/courses', courses)
app.use('/', home)


const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on Port ${port}...`))
