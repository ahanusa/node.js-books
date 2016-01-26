var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var passport = require('./src/config/passport', app);
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
var adminRouter = require('./src/routes/adminRoutes.js')(nav);
var authRouter = require('./src/routes/authRoutes.js')(nav);

// CONFIGURE MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

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

