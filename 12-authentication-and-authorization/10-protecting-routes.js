// we dont need to protect all routed. some routes should be public. like for loging, for registering, for list of genres etc. we'll selectively protect the end point routes

// go to the genres.js module in routes.post method we have following arguments.
// routes.post(route, optionally middleware, actual route handler)