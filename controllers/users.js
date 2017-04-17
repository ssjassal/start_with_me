var express = require('express');
var User = require('../models/users.js');
var Task = require('../models/tasks.js');
var router = express.Router();

router.get('/', function(req, res){
	User.find({}, function(err, foundUsers){
		res.render('users/index.ejs', {
			users: foundUsers
		});
	})
});

router.post('/', function(req, res){
	User.create(req.body, function(err, createdUser){
		res.redirect('/users');
	});
});

router.get('/new', function(req, res){
	res.render('users/new.ejs');
});

router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/show.ejs', {
			user: foundUser
		});
	});
});

router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, foundUser){
		var taskIds = [];
		for (var i = 0; i < foundUser.tasks.length; i++) {
			taskIds.push(foundUser.tasks[i]._id);
		}
		Task.remove(
			{
				_id : {
					$in: taskIds
				}
			},
			function(err, data){
				res.redirect('/users');
			}
		);
	});
});

router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/edit.ejs', {
			user: foundUser
		});
	});
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/users');
	});
});

module.exports = router;
