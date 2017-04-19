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
        console.log(req.body.username + '+' + req.body.password + '+' + foundUser + '+' + req.session.currentuser);
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
           console.log('in IF');
            req.session.currentuser = foundUser;
            res.redirect('/users/show');
        } else {
            res.send('wrong password');
        }
    });
});

router.delete('/', function(req, res){
    req.session.destroy(function(){
        res.redirect('/');
    });
})

module.exports = router;
