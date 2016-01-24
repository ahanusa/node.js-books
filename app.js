var express = require('express');
var app = express();
var port = 5000;
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

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

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

bookRouter.route('/single')
          .get(function(request, response) {
            response.send('Hello Books Single');
          });

app.use('/books', bookRouter);

app.get('/', function(request, response) {
  response.render('index', 
                  {
                    title: 'Index', 
                    nav: [
                    {
                      link: '/books',
                      text: 'Books'
                    },
                    {
                      link: '/authors',
                      text: 'Authors'
                    }
                  ]});
});

app.listen(port, function() {
  console.log('running on port ' + port);
});

