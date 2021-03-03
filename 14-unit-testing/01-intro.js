// automaated testing is a practice of writing code to test our code and then run those tests in an automated fashion

// in automated testing our code sonsists 
// 1- Application code(Production code)
// 2- test code.

// for example we have a function in our code that is based on some conditions return some thing. it takes some arguments .like
// function some(arg){
//     if(some) return ...;
//     if(some) return ...;
//     if(some) return ...;
// }

// Manual Testing 
// launch application
// may be login
// navigate to that function after some clicks 
// fill out the forms
// submit it 
// verify the result

// we have to repeat all these steps for different values of form. this process may takke several minutes. this is only for one function. but in real world we may have hundereds of functions.
// as our app grows the time required to test the whole application increased exponentionally thats why we use automated testing.
// in automatyed testing we write code and diorectly call this function with different inputs and verify that this function is returning a right output
// we can rerun this test every time we change our code, or commit the code to the repository and before deploying our application. and with this approach we can test and executes all the path in less than a second. we can write several hundereds or thousands of automated tests for various parts of our application and run them all in a few seconds. there are a lot of benefits of automated testing.

// Benefits of AT
// we can frequently test our code in less time.
// this is not the only benefit of automated testing
// the most important thing is that we can catch the bugs before deploying the application. it allows us to deploy our application with more confidence
// we have to write tests to minimize the number of bugs that occured in production. automated testing doesnot provide the bugs free application the thing is that it minimizes the bugs
// refactor your code with confidence
// refactoring means changing the structure of the code without changing the behviour of code. means extrat a few line from a method and put it in other methor or changing the name of the method is called refactoring

// it helps us to focus more on the code quality. we make it sure that every method works with different inputs under different circumstances