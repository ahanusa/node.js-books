var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var router = function() {
  authRouter.route('/signup')
            .post(function(request, response) {
              var url = 'mongodb://localhost:27017/libraryApp';
              mongodb.connect(url, function(err, db) {
                var collection = db.collection('users');
                var user = {
                  username: request.body.userName,
                  password: request.body.password
                };
                collection.insert(user, function(error, results) {
                  request.login(results.ops[0], function() {
                    response.redirect('/auth/profile');
                  });
                });
              });
            });

  authRouter.route('/signin')
            .post(passport.authenticate('local', {
              failureRedirect: '/'
            }), function(request, response) {
                  response.redirect('/auth/profile');
            });

  authRouter.route('/profile')
            .all(function(request, response, next) {
              if (!request.user) {
                response.redirect('/');
              }
              next();
            })
            .get(function(request, response) {
              response.json(request.user);
            });
    
  return authRouter;
};

module.exports = router;

