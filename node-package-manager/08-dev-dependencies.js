// so for we have installed dependencies are application dependencies. like mongoose and underscore. the application needs these dependencies for proper functionality of app.
// some time we use dependencies that are only used during development..
// for example we have tool for running unit test, we have tool for bring static analysis of our code we have tools for bundaling of javascript code and so on. these all tools are used during app development. they donot have to be installed or go to production environment on the server while app deployment. there for these dependecies are called development dependencies.

// jshint is a tool for analyzing the javascript code. we'll see how can we install dev dependecies.
//npm install jshint --save-dev
// all the dependencies either they are for development or for production. they installed in the node_modules
