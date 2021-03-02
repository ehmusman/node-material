// we have an introduction about the config package. we used this package to store the configuration settings of our application in json file or in environment variables.
// create a folder named as config and inside it create a file default.json// this file insure the default settings of our app. for now default setting are 
// {
//     "jwtPrivateKey": ""
// }

// create anotherfile named as
// custome-environment-variables.json // name should be as it is
// {
//     "jwtPrivateKey": "vidly_jwtPrivateKey"
// }
// go to the auth.js file and require config module and use the config.get("jwtPrivateKey") method. this name is the name of our application setting. the actual value or actual secret will be in environment variable.
// one last change , go to index.js. when the application starts we have to make it sure that the environment variable is set. otherwise we have to terminate the application because our authentication end point cannot function properly.

// in auth.js
// const config = require('config')
// const token = jwt.sign({ _id: user.id }, config.get('jwtPrivatekey'))


// in index.js
// const config = require("config")
// if (!config.get("jwtPrivateKey")) {
//     console.log("Fetal Error:  jwtPrivateKey is not defined")
//     // then we need to exit the process
//     process.exit(1) // 0 is for success other than 0 is for failure
//     // nodemon will not exit the application. node will exit the application. nodemon still working even the application ceashes.
// }

// run in terminal 
// export vidly_jwtPrivateKey=writeAnyThingHere