var express = require('express');
var adminRouter = express.Router();

var router = function(nav) {
  adminRouter.route('/addBooks')
             .get(function(request, response) {
               response.send('add books');
  });

  return adminRouter;
};

module.exports = router;
