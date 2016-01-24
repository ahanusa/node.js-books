var express = require('express');
var app = express();
var port = 5000;
var nav = [
  {
    link: '/books',
    text: 'Books'
  },
  {
    link: '/authors',
    text: 'Authors'
  }
];
var bookRouter = require('./src/routes/bookRoutes.js')(nav);

app.use(express.static('public'));
app.use('/books', bookRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', 
                  {
                    title: 'Index', 
                    nav: nav
                  });
});

app.listen(port, function() {
  console.log('running on port ' + port);
});

