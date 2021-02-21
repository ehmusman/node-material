const _ = require('underscore');

// when we write something inside the require paranthesis it consider it in three ways
// 1- it consider it as a built in module and starts its import. when it fails
// 2- it consider it a file like underscore.js or an index.js file inside the folder named as underscore. when it also fails here
// 3- it moves toward node_modules folder and pick it from installed modules.
var result = _.contains([1, 2, 3], 3)
console.log(result)