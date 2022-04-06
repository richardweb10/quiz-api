var LocalStrategy   = require('passport-local').Strategy;
//const passport  = require('passport');
var User = require('../models/user.model');
var _userService = require('../services/user.service');
//var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy(
        async function( username, password, done) { 
            

            User.findOne({ 'email' :  username }, 
                function(err, user) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log the error and redirect back
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false);                 
                    }
                    // User exists but wrong password, log the error 
                    if (!user.comparePasswords(password)){
                        console.log('Invalid Password');
                        return done('null', false); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, user);
                }
            );


        })
    );

    
}