let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create car Schema
let carsSchema = new Schema({
    Type:{
        type: String,
        required: true
    },
    Package:{
        type: String,
        required: true
    },
    Interior:{
        type: String,
        required: true
    },
    Exterior:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Brand:{
        type: String,
        required: true
    },
    Vin:{
        type: String,
        required: true
    }
});
let Car = module.exports = mongoose.model('cars', carsSchema);