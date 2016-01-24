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

bookRouter.route('/')
          .get(function(request, response) {
            response.render('books',
                  {
                    title: 'Books', 
                    nav: [
                    {
                      link: '/books',
                      text: 'Books'
                    },
                    {
                      link: '/authors',
                      text: 'Authors'
                    }
                  ],
                  books: books});
});

bookRouter.route('/:id')
          .get(function(request, response) {
            var id = request.params.id;
            response.render('book',
                  {
                    title: 'Books', 
                    nav: [
                    {
                      link: '/books',
                      text: 'Books'
                    },
                    {
                      link: '/authors',
                      text: 'Authors'
                    }
                  ],
                  book: books[id]});
});

module.exports = bookRouter;
