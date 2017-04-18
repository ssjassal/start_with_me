var mongoose = require('mongoose');
var Task = require('./tasks.js');
var validator = require('validator');

//import { isEmail } from 'validator';

var userSchema = mongoose.Schema({
	name: { type: String, required: true },
	location: String,
	email: { type: String,
				validate: [ validator.isEmail, 'Please enter a valid email' ],
				required: true
			 },
	age: Number,
	parent: String,
	school: String,
	tasks: [Task.schema]
});

var User = mongoose.model('Author', userSchema);

module.exports = User;