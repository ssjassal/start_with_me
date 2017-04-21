//=========================REQUIRED MODULES=========================
var express = require('express');
var User = require('../models/users.js');
var Task = require('../models/tasks.js');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcrypt');

//=========================GET ROUTES=========================
router.get('/', function(req, res){
	User.find({}, function(err, foundUsers){
		res.render('users/index.ejs', {
			users: foundUsers,
			currentUser: req.session.currentuser
		});
	})
});

router.get('/new', function(req, res){
	res.render('users/new.ejs',{
		currentUser: req.session.currentuser
	});
});

router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/show.ejs', {
			user: foundUser,
			currentUser: req.session.currentuser
		});
	});
});


router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		res.render('users/edit.ejs', {
			user: foundUser,
			currentUser: req.session.currentuser
		});
	});
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/users');
	});
});

//=========================PUT/POST ROUTES=========================
router.post('/', function(req, res){
	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	User.create(req.body, function(err, createdUser){
		 res.redirect('/sessions/new');
	});
});

//=========================DELETE ROUTES=========================
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
				res.redirect('/');
			}
		);
	});
});

module.exports = router;
