var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	title:String,
	body:String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
