var mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/AdvJavaScriptFINAL', (error) => {
    if(error){
        console.log("Error in Connecting")
    }else{
        console.log("Connection to Database Sucessful")
    }
});

var people = require("./model")
