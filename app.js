var express = require('express');
var app = express();
var port = 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/')
          .get(function(request, response) {
            response.send('Hello Books');
          });

bookRouter.route('/single')
          .get(function(request, response) {
            response.send('Hello Books Single');
          });

app.use('/books', bookRouter);

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

app.listen(port, function() {
  console.log('running on port ' + port);
});

