// "mongoose" : '^4.13.6"
// ^ this is called Caret character.
// to understand this we have to know about semantic versioning ehich is also called SemVer.
// in semantic versioning the component of a node package has three components as i have written in first line.
//  there names are as followed 
// Major.Minor.Patch 
// this Patch release is for Bug Fixing. 
// for example the mongoose developer team one day find a bug in    4.13.6 version. they will remove that bug and increase the patch version to 4.13.7/
// the Minor version is used to add more features in the existing package with out bracking the existing APIs. if new features are added in mongoose package by mongose developer the new version will be 4.14.0. 0 patch means yet there is no bug fond in this package. this package could be unstable. if they find and fixed bug they will increase the Patch version. if they add new features in package that potentially break the existing APIs then they will increase the Major version. the next version could be 5.0.0. this is called semantic versioning.
// now we are able to know about hte Caret character
// in  ^4.13.6  Caret character the ^ tells to the npm that we can intersect with any version of package as long as the major version is 4. means the minor version or patch version may be vary. if there is any newer miner or patch version is available you can intersect with this.
// if i created an app and push it to the git repo. if 6 months latter any one download or clone it on its own machine. if at that time newer versions of that specific package has been increased with minor and patch version. that the latest miner and patch version will be installed instead on written existed version.
// an other syntax to write this with out Caret character is 4.x
// we can say that ^4.13.6 === 4.x

/////////-------------Telde(~)---------------------------

// in some real world application we can see ~ instead of ^ .
// ~1.8.3 means we can intersect with any version with major and miner  version 1.8. means major and miner version should not be changed.
// the alternate of ~1.8.3 is 1.8.x . 
// if there will be new patch released will intersect with this version without changing the Major and Miner version.
// we can say ^ and ~ characters helps our App to be updated with the newer versions of specific package which we have been used inside our applications. but some times this will create an issue.
//like if version 1.8.3 is updated to 1.8.4 this may fix the bug but can break our application.
// to handle this if we have to remove the ~ or ^ charactes written before the Major versions. after 3 or 6 months the exact version will be installed in the any one machine who will run npm install.
// this is how ~ and ^ characters works in semantic versions.