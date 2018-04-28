const passport = require("passport"),
    bcrypt = require('bcryptjs'),
  LocalStrategy = require("passport-local").Strategy,
  User = require("../models").User;

module.export = function(passport){
passport.use( new LocalStrategy(
    function(username, password, done) {
        User.find({ where: { username: username } }).then(user => {
            if (!user){
                console.log("No user");
                return done(null, false);
                }
            })
        }
    ));
    const saltRounds = 10;
    const userPassword = "";

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(userPassword, salt, function(err, hash) {
            
        })
    })
}