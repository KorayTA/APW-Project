const express = require('express');
const router = express.Router();
const { db, aggregate } = require('../models/Cars');

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
        title4: 'Below you will find a series of options that will help us find the perfect car for you.',
        title5: 'If there is an option that you are unsure of, leave it blank! We will provide examples',
        title6: 'based on the other information that you have given us.',
        Users: Users
            });
        }
    });
});


//Create-A-Car Post
router.post('/', function(req, res){
    let car = new Car();
    car.Brand = req.body.brand;
    car.Type = req.body.type;
    car.Package = req.body.package;
    car.Interior = req.body.intColor;
    car.Exterior = req.body.extColor;
    car.Price = req.body.startPrice;
    

    //Default Package is blank string
    if(car.Package == undefined){
        car.Package = '';
    }else{
        car.Package = req.body.Package;
    }

    //Default Price is 50,000
    if(car.Price == null){
        car.Price = 50000;
    }else{
        car.Price = req.body.startPrice;
    }

    //Search for the best match car from the search 

    if(Car.find(req.params.price) <= car.price){

        db.car.aggregate(
            [
                {"$sort":{Brand: 1}, "$sort":{Type :1}, "$sort":{Package: 1}, "$sort":{Interior: 1}, "$sort":{Exterior: 1}}
            ],
            function(err, result){
                if (err) throw err;
                console.log()
            }
        )

    }


    // if(Car.find(req.params.price) <= car.price){
    //     if(car.Brand == Car.find(req.params.Brand), function(req, res){
    //         //let arr = [Car.params.id];
    //         console.log(car.params.id)
    //     });
    // }

    
    //console.log(car.Brand);
    //console.log(car.Type);
    //console.log(car.Package);
    //console.log(car.Interior);
    //console.log(car.Exterior);
    //console.log(car.Price);
    res.redirect('/yourCars');
    
    return;
});

//Get Cars from DB
router.get('/yourCars', function(req, res) {
    Car.find({}, function(err, Cars){
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