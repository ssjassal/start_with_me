var mongoose = require('mongoose');
var Task = require('./tasks.js');

var userSchema = mongoose.Schema({
	name: String,
	tasks: [Task.schema]
});

var User = mongoose.model('Author', userSchema);

module.exports = User;
