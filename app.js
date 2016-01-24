var express = require('express');
var app = express();
var port = 5000;
var bookRouter = require('./src/routes/bookRoutes.js');

app.use(express.static('public'));
app.use('/books', bookRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

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

