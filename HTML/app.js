const express = require('express');
const path = require('path');

//Init App
const app = express();

//Loading the view Engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req,res) {
res.render('Create-A-Car');
});


//Start server
app.listen(3000, function() {
    console.log('Server started on 3000...')
});