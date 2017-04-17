var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var validator = require('validator');

var port = 8080;
var usersController = require('./controllers/users.js');
var tasksController = require('./controllers/tasks.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use('/users', usersController);
app.use('/tasks', tasksController);

app.get('/', function(req, res){
	res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/swmDB');

mongoose.connection.once('open', function(){
	console.log('connected to mongo');
});

app.listen(port, function(){
	console.log('listening....');
});
