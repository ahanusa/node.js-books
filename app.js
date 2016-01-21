var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response) {
  response.send('Hello World');
});

app.get('/books', function(request, response) {
  response.send('Hello Books');
});

app.listen(port, function() {
  console.log('running on port ' + port);
});

