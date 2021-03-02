// previous section
// use try catch blocks in case of async and await. .then .catch in case of promises. thats it
// try{
// }catch(ex){
//     res.status(500).send("internal server error....") // 
// }

// there is a problem in current implementation. if in future we want to change the messge which we are sending in catch block, we have to go to every route handler to change this message. and in real world application we have to log the exception. to log the exceptions we have to go to each route handler and change it to lo the exceptions. so we have to move this logic for handeling error at some central place.
// in index.js we have implemented all of our milddle ware functions. in express we have a special middleware function called error middleware. we register that middleware function after all the existing middleware functions. 
// app.use(function(err,req,res,next){// here we have one extra argument which is err or used to catch the exception somewhere else in the application
// in this function we'll write all the logic for handling error in our application.
// })
// now we'll call the next(ex) function in the catch block. what will be the next middleware function?
// the next as we have writte our middleware function at the last of index.js. so the next middleware function will be this function for all route handlers.

//res.status(500).send("Something Failed...")

// here the logic is of one line only but in real world the logic may be several line long.we dont have to add all those details in index.js. in index.js we just wanna do orchestration we do a high level arrangement the detail should be encapsulated in different modules. so we have to move this middleware function in saperate module,