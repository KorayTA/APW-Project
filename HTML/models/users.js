let mongoose = require('mongoose');

//create user Schema
let usersSchema = mongoose.Schema({
    "First Name":{
        type: String,
        required: true
    },
    "Last Name":{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Staff:{
        type: Boolean,
        required: true,
        default: false
    }
});

let User = module.exports = mongoose.model('User', usersSchema);