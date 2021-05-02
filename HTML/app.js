const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const passport = require('passport');


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
let Car = require('./models/Cars');

//Loading view Engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

//Body Parser Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Passport Config
require('./config/passport')(passport);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


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

//Add Routes

//createAccount Route
 let createAccount = require('./routes/createAccount');
 app.use('/createAccount', createAccount);

//Sign-in Route
 let Signin = require('./routes/Sign-in');
 app.use('/Sign-in', Signin);

//Create-a-Car Route
 let CreateCar = require('./routes/Create-A-Car');
 app.use('/Create-A-Car', CreateCar);


//Start server
app.listen(3000, function() {
    console.log('Server started on 3000...')
});