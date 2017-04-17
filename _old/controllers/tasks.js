var express = require('express');
var router = express.Router();
var Task = require('../models/tasks.js');
var User = require('../models/users.js')

router.get('/', function(req, res){
	Task.find({}, function(err, foundTasks){
		res.render('tasks/index.ejs', {
			tasks: foundTasks
		});
	})
});

router.get('/new', function(req, res){
    User.find({}, function(err, allUsers){
        res.render('tasks/new.ejs', {
            users: allUsers
        });
    });
});

router.post('/', function(req, res){
    User.findById(req.body.userId, function(err, foundUser){
        Task.create(req.body, function(err, createdTask){
            foundUser.tasks.push(createdTask);
            foundUser.save(function(err, data){
                res.redirect('/tasks');
            });
        });
    });
});

router.get('/:id', function(req, res){
    Task.findById(req.params.id, function(err, foundTask){
        User.findOne({'tasks._id':req.params.id}, function(err, foundUser){
            res.render('tasks/show.ejs', {
                user:foundUser,
                task: foundTask
            });
        })
    });
});

router.delete('/:id', function(req, res){
    Task.findByIdAndRemove(req.params.id, function(err, foundTask){
        User.findOne({'tasks._id':req.params.id}, function(err, foundUser){
            foundUser.tasks.id(req.params.id).remove();
            foundUser.save(function(err, data){
                res.redirect('/tasks');
            });
        });
    });
});

router.get('/:id/edit', function(req, res){
	Task.findById(req.params.id, function(err, foundTask){
		User.find({}, function(err, allUsers){
			User.findOne({'tasks._id':req.params.id}, function(err, foundTaskUser){
				res.render('tasks/edit.ejs', {
					task: foundTask,
					users: allUsers,
					taskUser: foundTaskUser
				});
			});
		});
	});
});

router.put('/:id', function(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedTask){
        User.findOne({ 'tasks._id' : req.params.id }, function(err, foundUser){
			if(foundUser._id.toString() !== req.body.userId){
				foundUser.tasks.id(req.params.id).remove();
				foundUser.save(function(err, savedFoundUser){
					User.findById(req.body.userId, function(err, newUser){
						newUser.tasks.push(updatedTask);
						newUser.save(function(err, savedNewUser){
			                res.redirect('/tasks/'+req.params.id);
			            });
					});
	            });
			} else {
				foundUser.tasks.id(req.params.id).remove();
	            foundUser.tasks.push(updatedTask);
	            foundUser.save(function(err, data){
	                res.redirect('/tasks/'+req.params.id);
	            });
			}
        });
    });
});

module.exports = router;
