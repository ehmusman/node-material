// as we know that we have three tyypes of tests. than what type of test we have to implement? the answer is that we have to implement all types of test with an hirarchy. this is called test pyramid.
// this pyramid argues that most of our tests should be in the category of unit test because they are easy t owrite and they executes quickly.
// we also have to do a bunch of integration testing. because they test the application with external dependencies. but we have not to deal with user interface
// for some key functions of application we have to write a few end to end tests
// the actual ratio between unit, integration, and endtoend tests is really depends on the project

// unit test are usefull for quickly confirming the logic or to test conditional statements or loops. if we have a method i=with complex logic we have to test them by using unit test.
// these are ideal for testing the calculation functions

// Summary
// favour tests over UI or end to end tests. because they are fastest run, cheepest to  write and very precise. they can pinpoint exactly where they fails, they give a rapid feedback
// cover unit test gap with integration tests
// use end-to-end test sparingly only for the key fnctions of our application