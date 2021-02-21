
// npm outdated
// this command will show all the installed packages with currentversion, wanted version, latest version, and ;location.

// if we run npm update it will update the package from current to wanted.
// difference between wanted version and latest version is that the wanted version and current version has the same Major version. but the latest version is may have the major version different which not be suitable for out app. because newer version may have broken some APIs whic will not support our application.
// npm update command will update package from current to wanted version.


///////////
// to update from current version to the latest version we have to do some thing.
// first run the command
// npm i -g npm-check-update

// this  will list the all outdated packages with new latest versions. to install the new lates version than we have to run the command 
// npm-check-update -u
// it will update the package.json file with lates dependencies.
// to install these dependencies we have to run npm install.
// than the new latest dependencies will be installed in node_modules