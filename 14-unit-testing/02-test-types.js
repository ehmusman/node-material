// in automated testing we have three types of tests
// 1- unit test
// 2- integration test
// 3- end to end test
// Unit test
// unit test means we test a unit of an application with the external dependencies like files, databases, web servis=ces and so on.
// they are cheap to write and execute fast so we can run hundered of them in just a few seconds
// they dont give a lot of confidence about the reliability of application. because they are tested without their external dependencies.

// integration test
// it tests a class or a component with its external dependencies. it tests the integration of our application code with these concrete dependencies like files, databases and so on, external dependencies are the mooooost important
// take longer time for execution because they need to read and write the database. they give us more confidence about the help of our application
// integration test takes a few units or classes and test their behaviour as a whole, if we are writing a test for two classes combinely than its called in integration test. even if these clases are talking with external databases or not.
// these tests are coupled with the implementation detail as we change the implementation of clases these tests will be break and we have to waste a lot of time to fix them

// End to End test
// drives an application through its UI.
// they give us a lot of confidence
// very slow
// very brittle means a small change in the application will break the the test