let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create user Schema
let usersSchema = new Schema({
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

mongoose.model('users', usersSchema);