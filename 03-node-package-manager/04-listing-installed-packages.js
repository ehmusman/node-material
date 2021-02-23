// ^4.13.6 means that we can intersect with any version of package with Major version is $. minor and major version should be fully updated.
// but in reality when we restore these dependencies chances are the installed version of package of that package inside the node_modules is higher than the 4.13.6. how can we know what version has been installed? 
// there are two ways
// 1-  is two check the package.json file inside the installed package in node_modules. its a very tidious task to check the diferent installed packages one by one.
// 2- if we want to see a list of installed packages with there versions. we have to simply run "npm list" or 'npm list --depth=0'.
// npm list will show the list of all installed packages with the dependencies of that packages. like a tree like structure. to solve this run the second command. 
// i have run the "npm list" its result is same as npm list --depth=0.