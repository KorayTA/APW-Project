const express = require('express');
const router = express.Router();


let User = require('../models/Users');
let Car = require('../models/Cars');
const { db } = require('../models/Cars');
const Cars = require('../models/Cars');

//Page Render
router.get('/', function(req, res) {
    User.find({}, function(err,Users){
        if(err){
            console.log(err);
        }
        else{
    res.render('EditCars', {
        title: 'APW Dealership',
        title1: 'Find your dream-car with us!',
        title3: 'Edit Car database:',
        title4: 'Enter preferred options to add car to database or ',
        title5: 'enter car vin number to remove desired car',
        Users: Users
            });
        }
    });
});

//Add car post
router.post('/AddCar', function(req,res){
    const Brand = req.body.brand;
    const Type = req.body.type;
    const Package = req.body.package;
    const Interior = req.body.intColor;
    const Exterior = req.body.extColor;
    const Price = req.body.startPrice;
    const Vin = req.body.Vin;
    
    if(Brand == '' || Type == '' || Package == undefined || Interior == '' || Exterior == '' || Price == null || Vin == ''){
        req.flash('danger', 'Please Fill Out All Fields');
        res.redirect('/EditCars');
    }else{
        let newCar = Car({           
            Type:Type,
            Package:Package,
            Interior:Interior,
            Exterior:Exterior,
            Price:Price,
            Brand:Brand,
            Vin:Vin
            
        });
        newCar.save(function(err){
            if(err){
                console.log(err);
                return;
            }else{
                req.flash('success','Car Added');
                console.log('Car Added');
                res.redirect('/Editcars');
        
            }
        });
        
    }
});

//Add remove car post
router.post('/RemoveCar', function(req,res){
    if(req.body.Vin == ''){
        req.flash('danger', 'Please Fill Out All Fields');
        res.redirect('/EditCars');
    }else{
        req.flash('success', 'Car Removed');
        const tempVin = req.body.Vin;
        console.log(tempVin);
        Cars.remove({"Vin": tempVin})
        res.redirect('/EditCars');
    }
});



module.exports = router;