const mongo  = require('mongoose');
let Car = require('../models/Cars');




const Mon = async() => {
        try{
            const results = Car.find({});
            console.log(JSON.stringify(results));
        }catch{
            console.log("there is an error")
        }
    }

