// role based authorization means admin can delete the post for higher security purpose.
// now go to user-model module and add isAdmin property in userSchema.

// create a new module where middleware function is created named as admin
// function admin(req, res, next) {
//     if (!req.user.isAdmin) return res.status(403).send("Access Denied...");
//     next()
// }
// module.exports = admin;