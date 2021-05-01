const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/FinalDB', { useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;



//check the connection
db.once('open', function(){
    console.log('connected to the db.');
})

//check for db errors
db.on('error', function(err){
    console.log(err);
});

//Init App
const app = express();

//use models
let User = require('./models/Users');

//Loading view Engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

//Body Parser Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//seting public folder
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
res.render('Website', {
    title: 'APW Dealership',
    title1: 'Find your dream-car with us!',
    Users: Users
        });
    }
    });
});

//Add routes
app.get('/CreateAccount', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('createAccount', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Create-Account:',
        title4: 'Please fill out the boxes below.',
        Users: Users
            });
        }  
    });    
});

app.get('/Sign-In', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('Sign-in', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Sign-in:',
        title4: 'Please provide us with your email and password. Then tell us if you are a staff member or not.',
        Users: Users
            });
        }
    });
});

app.get('/Create-A-Car', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('Create-A-Car', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Car Search:',
        title4: 'Below you will find a series of options that will help us find the perfect car for you.',
        title5: 'If there is an option that you are unsure of, leave it blank! We will provide examples',
        title6: 'based on the other information that you have given us.',
        Users: Users
            });
        }
    });
});

//createAccount Post route
app.post('/createAccount', function(req, res){
    let user = new User();
    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.Email = req.body.Email;
    user.Password = req.body.Password;

    //adds user to Users db
    user.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            console.log(req.body.FirstName);
            console.log(req.body.LastName);
            console.log(req.body.Email);
            console.log(req.body.Password);
        }
    });
    
    return;
})

//Create-A-Car Post route



//Start server
app.listen(3000, function() {
    console.log('Server started on 3000...')
});