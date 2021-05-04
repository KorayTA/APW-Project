const express = require('express');
const router = express.Router();

//Car Model Import
let Car = require('../models/Cars');
let User = require('../models/Users');

//Creat-A-Car page render
router.get('/', function(req, res) {
    User.find({}, function(err, Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('Create-A-Car', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Car Search:',
        title4: 'Please Select Your Sort Preferences!',
        Users: Users
            });
        }
    });
});
router.get('/yourCars', function(req, res){
    res.redirect('/Create-A-Car/yourCars')
    return;
});

//Get Cars from DB
router.post('/yourCars', function(req, res) {
    var tempOrder;
    var sortPresent = cars.Brand;
    if(req.body.order == 'Acending'){
        
        tempOrder = 1;
    }else if(req.body.order == 'Decending'){
        tempOrder = -1;
    }else{
        var tempOrder = -1;
    }
    if(req.body.package == 'Brand'){
        Car.find({}).sort({Brand: tempOrder}).exec( function(err, Cars){
            if(err){
                console.log(err);
            }
            else{
            res.render('yourCars', {
            title: 'APW Dealership',
            title1: 'Find your dream-car with us!',
            Cars: Cars
                });
            }
        });
    }else if(req.body.package == 'Package'){
        Car.find({}).sort({Package: tempOrder}).exec( function(err, Cars){
            if(err){
                console.log(err);
            }
            else{
            res.render('yourCars', {
            title: 'APW Dealership',
            title1: 'Find your dream-car with us!',
            Cars: Cars
                });
            }
        });
    }else if(req.body.package == 'Price'){
        Car.find({}).sort({Price: tempOrder}).exec( function(err, Cars){
            if(err){
                console.log(err);
            }
            else{
            res.render('yourCars', {
            title: 'APW Dealership',
            title1: 'Find your dream-car with us!',
            Cars: Cars
                });
            }           
        });
    }
    else{
        Car.find({}).sort({Price: tempOrder}).exec( function(err, Cars){
            if(err){
                console.log(err);
            }
            else{
            res.render('yourCars', {
            title: 'APW Dealership',
            title1: 'Find your dream-car with us!',
            Cars: Cars
                });
            }           
        });
    }
   
});

//Get Single Car
router.get('/yourCars/:id', function(req, res) {
    Car.findById(req.params.id, function(err, car) {
       res.render('car', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        car: car    
        });   
    });
});

module.exports = router;