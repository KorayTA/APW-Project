// var mongodb= require('mongodb');
// var mongodb= mongodb.MongoClient;


//mongoose.connect('mongodb://127.0.0.1/AdvJavaScriptFINAL', { useUnifiedTopology: true }, { useNewUrlParser: true });

// mongoose.connection.once('open', function(){
//   console.log("Connection has been made");

//   console.log()
// }).on('error', function(error){
//   console.log("Error is ", error);
// });

var connection = require("./models/model.js")
var express = require("express");
var application = express();
var path = require("path");
var expressHandlerbars = require("express-handelers");



application.use(express.urlencoded({
  extended : true
}));

application.get("/", (req, res) => {
    res.send('<h1>Testing<h1>')
})

application.listen("http://elvis.rowan.edu/~shinni67/AdvJavaScriptFINAL/createAccount.html", () => {
  console.log("Server has started")
});