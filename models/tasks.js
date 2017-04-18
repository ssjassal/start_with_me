var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	title:{type: String, required: true},
	location: String,
	points: Number,
	description:String,
	taskImg: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
