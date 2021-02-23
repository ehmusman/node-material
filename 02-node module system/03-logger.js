var url = 'https://mylogger.io/log';

function log(message) {
    console.log(message)
}
// module.exports.log = log;
// if we have to only export on thing/function than we'll use the following syntax
// every module wrapp the whole file inside a function with passing parameters __filename, __dirname, exports, require, module
// console.log(__filename)
// console.log(__dirname)

module.exports = log

//----------Built in modules-----------
// HTTP, OS, Parh, Process, Query String, Readline, Inspector, stream etc.
// we are going to learn about the Path module. 