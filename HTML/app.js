const express = require('express');
const path = require('path');

//Init App
const app = express();

//Loading the view Engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req,res) {
res.render('Website', {
    title: 'APW Dealership',
    title1: 'Find your dream-car with us!'
});
});

//Add routes
app.get('/CreateAccount', function(req, res) {
    res.render('createAccount', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Create-Account:',
        title4: 'Please fill out the boxes below with your information.'
    });
});

app.get('/Sign-In', function(req, res) {
    res.render('Sign-in', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Sign-in:',
        title4: 'Please provide us with your email and password. Then tell us if you are a staff member or not.'
    });
});

app.get('/Create-A-Car', function(req, res) {
    res.render('Create-A-Car', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Car Search:',
        title4: 'Below you will find a series of options that will help us find the perfect car for you.',
        title5: 'If there is an option that you are unsure of, leave it blank! We will provide examples',
        title6: 'based on the other information that you have given us.'
    });
});

//Start server
app.listen(3000, function() {
    console.log('Server started on 3000...')
});