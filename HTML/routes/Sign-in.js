const express = require('express');
const router = express.Router();
const passport = require('passport');
//Bring in user model
let User = require('../models/Users')

//Render Page
router.get('/', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('Sign-in', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Sign-in:',
        title4: 'Please provide us with your email and password',
        Users: Users
            });
        }
    });
});

//Login process
router.post('/', function(req,res, next){
    passport.authenticate('local', {
        successRedirect:'/Create-A-Car',
        failureRedirect:'/Sign-in',
        failureFlash: true,
        successFlash: true
    })(req,res,next);
    
});

//Logout
router.get('/logout', function(req,res,next){
    logUser = false;
    Staff = false;
    req.flash('success','Successfully Logged out');
    res.redirect('/Sign-in');
});

module.exports = router;