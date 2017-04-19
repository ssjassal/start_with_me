var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');
var session = require('express-session');

router.get('/new', function(req, res){
    res.render('sessions/new.ejs',{
      currentUser: req.session.currentuser
   });
});

router.post('/', function(req, res){
    User.findOne({ username: req.body.username }, function(err, foundUser){
        console.log(req.body.username + '+' + req.body.password + '+' + foundUser + '+');
        if (!foundUser){
           res.redirect('/users/new');
        } else if ( bcrypt.compareSync(req.body.password, foundUser.password) ){
          console.log('in IF');
          req.session.currentuser = foundUser;
          console.log(req.session.currentuser);
          res.redirect('/users/show');
       }else{
          console.log("doomed")
       }
    });
});

router.delete('/', function(req, res){
    console.log('In Logout Route');
    req.session.destroy();
      res.redirect('/');
});

module.exports = router;
