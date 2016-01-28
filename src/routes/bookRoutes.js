var express = require('express');
var bookRouter = express.Router();

var router = function(nav) {

  var bookController = require('../controllers/bookController')(null, nav);

  bookRouter.use(bookController.middleware);

  bookRouter.route('/')
            .get(function(request, response) {
              bookController.getIndex;
            });

  bookRouter.route('/:id')
            .get(function(request, response) {
              bookController.getById
            });

  return bookRouter;
};

module.exports = router;
