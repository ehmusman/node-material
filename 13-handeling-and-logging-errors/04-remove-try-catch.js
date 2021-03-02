// in these route handler we have these try catch blocks the problem with this implementation is that we have to repeat this try catch block in every route handler and also it is adding extra knowledge to the code and distracting us from the actual logic which is belong to this route handler/
// to solve this we have to implementit in another way. 
// create a new function 

// function asyncMiddleware(handler) {
//     return (req, res, next) => {
//         try {
//             handler(req, res)
//         }
//         catch (ex) {
//             next(ex)
//         }
//     }
// }

// in asyncmiddlware we are passing our whole route handler function. in express the route handler function is anonaymous. we dont have to call it. express call it by itself. so after we are passing it in the asyncMiddleware this middleware function is just a factory function that is just returning another function this returning another function will absolutely have the req,res,next arguments. which will further used in handeling routes

// use a express module
// npm i express-async-errors and remove all the asyncMiddleware