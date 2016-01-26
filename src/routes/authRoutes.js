var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function() {
  authRouter.route('/signup')
            .post(function(request, response) {
              console.log(request.body);
              request.login(request.body, function() {
                response.redirect('/auth/profile');
              });
            });

  authRouter.route('/profile')
            .get(function(request, response) {
              response.json(request.user);
            });
    
  return authRouter;
};

module.exports = router;

