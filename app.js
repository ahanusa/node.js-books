var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', 
                  {
                    title: 'Hello from render', 
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

app.get('/books', function(request, response) {
  response.send('Hello Books');
});

app.listen(port, function() {
  console.log('running on port ' + port);
});

