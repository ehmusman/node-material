// there is a problem in the current implementation,
// in users module we generate the json web token by followingg way

// const token = jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'))
// res.header('x-auth-token', token).send(_.pick(user, ['_id', "name", "email"]))

// and in auth module we have exact same code for generating token
// const token = jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'))

// look at the payload. currently we have only id property. chances are we may add more properties in this payload like name of the user. or email address or role of the user like is he ADMIN or not?
// with the current implementation every time when we change payload we have to remember the change and we have to go to other module and have to do same change. as the application will grow we'll forget about these changes which is not good. here we'll learn how can we encapsulate this logic in the single place.
// as a programmer i can think i have to create a function generateAuthToken() and every time i have to call this to do its jo. with this approach the problem is that a lot of functions will be hanging at alot of places.
// in object oriented programming we have a principle called
// Information Expert Principle
// that means if an object has a lot of information and he is expert at a given area that object should be responsible for mking decisions and performing tasks as a real world example a shef has a knowledge of cooking thats why the act of cooking in the resturant is done by shef not by the waiter because the waiter doesnt have a right knowledge right information about cooking in the resturant. if shef is an object it will do the act of cooking. take this principle and apply it in this code.
// in payload we are sending the id of user. in future we may send the name of user or email of the user. thats means the central place is a user. so the user object is responsible for generating its authennticating token. so the function which we'll wrote there should not be hanging in different modules of application.
// that would be a method in the use object. now its a task to create a method in the user object .
// const token = User.generateAuthToken() // we have to create this method. this will give us this token
// to do this go to user-model module where we have defined the user schema

// how can we add a method in user schema. 
// userSchema.method.key = value  // this is a syntax to add an additional key value pair in user schema. this is like as we extends the class. 
// userSchema.methods.generateAuthToken = function () {
    // we cannot use arrow function here because arrow function didnt have there own "this"// "this" in arrow function refrencing the calling function so typically we use arrow functions for standlone functions.
    // const token = jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'))
    // return token;
// }