// intro to authenticationa and authorization.

// Authentication is the process of identifying is the user is who they claim they are.
// forexample in logging. se send username and password to the server and the server authenticate us.

// authorization is determining if the user has the right permissions to perform the given operation 
// in our vidly application we want that only registered, logged in and authenticated users can perform operations that can modify data.
// if the user is anonymous or not loggedin he can only read data from these end points(rest api routes) if they want to create a new genre or update a movie they have to be authenticated first. and now as additional security we want to make sure that only admin users can delete data. so thats is the second level of authorization that we are talking about permissions here.

// for this purposes we have to create two more end points for our application.


// Register: POST /api/users
// Login: POST /api/logins
// here is a problem. whic type of request we are using with the login. becaause we are not adding something or not getting or updating something than which request types we'll use for login?
// actually we are creating a new logging request or logging command.
// we can also add all logins in our application in saperate collections in mongodb.
// if we dont want to store the logins we'll still use the logina s a login resource and POST to create it.

// now we'll create a user end poit the schema will be{name,email,password}
// for email we'll use type:String, unique:true  properties to ensure that only unique emails should be add in the registeration process.