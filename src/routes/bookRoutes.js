var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav) {
  bookRouter.route('/')
  .get(function(request, response) {
     var url = 'mongodb://localhost:27017/libraryApp';
     mongodb.connect(url, function(error, db) {
       var collection = db.collection('books');
       collection.find({}).toArray(function (error, result) {
          response.render('books',
                          {
                            title: 'Books', 
                            nav: nav,
                            books: result
                          });
          db.close();
       });
     });
  });

  //bookRouter.route('/:id')
  //.get(function(request, response) {
    //var id = request.params.id;
    //response.render('book',
                    //{
                      //title: 'Books', 
                      //nav: nav,
                      //book: books[id]
                    //});
  //});

  return bookRouter;
};

module.exports = router;
