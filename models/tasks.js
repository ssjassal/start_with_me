//=========================REQUIRED MODULES=========================
var mongoose = require('mongoose');
var User = require('./users.js');

//=========================SCHEMA=========================
var taskSchema = mongoose.Schema({
	title:{type: String, required: true},
	location: String,
	points: Number,
	description: String,
	taskImg: String,
	username: String,
	// username: [User.schema]
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
