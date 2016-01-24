var express = require('express');
var bookRouter = express.Router();

var books = [
    {
      title: 'War and peace',
      genre: 'Historical Fiction',
      author: 'Foo Jones',
      read: false
    },
    {
      title: 'War and peace II',
      genre: 'Historical Fiction',
      author: 'Foo Jones',
      read: false
    },
    {
      title: 'War and peace III',
      genre: 'Historical Fiction',
      author: 'Foo Jones',
      read: false
    },
    {
      title: 'War and peace IV',
      genre: 'Historical Fiction',
      author: 'Foo Jones',
      read: false
    },
];

var router = function(nav) {
  bookRouter.route('/')
  .get(function(request, response) {
    response.render('books',
                    {
                      title: 'Books', 
                      nav: nav,
                      books: books
                    });
  });

  bookRouter.route('/:id')
  .get(function(request, response) {
    var id = request.params.id;
    response.render('book',
                    {
                      title: 'Books', 
                      nav: nav,
                      book: books[id]
                    });
  });

  return bookRouter;
};

module.exports = router;
