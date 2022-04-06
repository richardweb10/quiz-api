module.exports = function(req, res, next) {

    if (req.isAuthenticated()){
		return next();
	// if the user is not authenticated then redirect him to the login page
    //res.redirect('/');
    }else{
            const error = new Error();
            error.message = "User is not authenticated";
            error.status = 401;
            throw error;
        }
}