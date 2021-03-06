//=========================REQUIRED MODULES=========================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var bcrypt = require('bcrypt');
var validator = require('validator');

//=========================VARIABLES=========================
var port = process.env.PORT || 8080;
var mongoDBURI = process.env.MONGODB_URI 	|| 'mongodb://localhost:27017/swmDB'

var sessionsController = require('./controllers/sessions.js');
var usersController = require('./controllers/users.js');
var tasksController = require('./controllers/tasks.js');

//=========================MIDDLE WARE=========================
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret: "lovelinus", //some random string
    resave: false,
    saveUninitialized: false
}));
app.use(express.static('public'));

app.use('/sessions', sessionsController);
app.use('/users', usersController);
app.use('/tasks', tasksController);

//=========================DB CONNECTION=========================
mongoose.connect(mongoDBURI);

mongoose.connection.once('open', function(){
	console.log('connected to mongo');
});

app.listen(port, function(){
	console.log('listening....');
});

//=========================GET ROUTES=========================
app.get('/', function(req, res){
	res.render('index.ejs', {
		currentUser: req.session.currentuser
	});
});
