var mongoose = require('mongoose');
const { kStringMaxLength } = require('node:buffer');

var userSchema = new mongoose.Schema({
    "First Name" : {
        type : String,
        required : "Required"
    },
    "Last Name": {
        type : String,
        required : "Required"
    },
    Email : {
        type : String,
        required : "Required"
    },
    "Password" : {
        type : String,
        required : "Required"
    },
    Staff : {
        type : Boolean,
        default: false
    }

});

mongoose.addAcc("people", peopleSchema)
module.exports = addAcc;