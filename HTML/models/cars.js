let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create car Schema
let carsSchema = new Schema({
    Type:{
        type: String,
        required: false
    },
    Package:{
        type: String,
        required: false
    },
    Interior:{
        type: String,
        required: false
    },
    Exterior:{
        type: String,
        required: false
    },
    Price:{
        type: String,
        required: true
    },
    Brand:{
        type: String,
        required: false
    },
    Vin:{
        type: String,
        required: false
    }
});
let Car = module.exports = mongoose.model('Cars', carsSchema);