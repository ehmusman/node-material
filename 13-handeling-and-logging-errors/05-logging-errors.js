//  in every enterprise application we need to logged the exceptions that error thrown in the application so later we come back and look at the log and see what are the areas of the application that we can improve. we have a very popular logging library called winston.
// npm i winston@2.4.0
// load it in the index.js
// const winston=require('winston')
// this winston is a default logger that is exported from this module we can also create a logger manually but with the default logger its sufficient for small to medium sized applications. we need a custom logger for a really large application. different loggers behave differently in different parts of the application. 

// this logger object has a Transport this transport is essentially a storage device for our logs so the winston comes with a few core transports they are
// console // for logging messages on the console.
// file
// http  // for calling an http endpoint for logging messages.

// there are also plugins for winston they are other npm modules for logging messages in "Mongodb" in "CouchDB(another popular NoSql DB)".
// there are also plugin for logging messages in Redis. and "Logly" which is a very popular log analysis and monitoring service for enterprise applications 

// this default logger which is exported from this module comes with one transport and that is for loging messages in console. we'll learn how to add another transport for logging messages in a file.

// winston.add(winston.transports.File, {filename: "logfile.log"}) // in index.js file 

// in error.js
// load the module
//  winston.log(loggingLevel, err.message )
// OR
// winston.error(err.message, err) // we optionally store err for matadata.
// logging level determines the importance of the message that we are going to log
// logginglevels are
// error, warn, info, verbose, debug, silly