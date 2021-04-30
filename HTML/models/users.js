let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create user Schema
let usersSchema = new Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
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

let User = module.exports = mongoose.model('Users', usersSchema);