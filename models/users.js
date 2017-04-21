//=========================REQUIRED MODULES=========================
var mongoose = require('mongoose');
var Task = require('./tasks.js');
var validator = require('validator');

//=========================SCHEMA=========================
var userSchema = mongoose.Schema({
	name: { type: String, required: true },
	location: String,
	email: String,
	age: Number,
	parent: String,
	school: String,
	userImg: String,
	username: String,
	password: String,
	tasks: [Task.schema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
