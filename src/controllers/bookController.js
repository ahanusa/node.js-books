var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

//MONGO COMMAND LINE
//mongo libraryApp 
//show collections
//db.books.find()

var bookController = function(bookService, nav) {

  var middleware = function(request, response, next) {
    if (!request.user) {
      response.redirect('/');
    }
    next();
  }

  var getIndex = function(request, response) {
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
  };

  var getById = function(request, response) {
    var id = new objectId(request.params.id);
    var url = 'mongodb://localhost:27017/libraryApp';
    mongodb.connect(url, function(error, db) {
      var collection = db.collection('books');
      collection.findOne({_id: id}, function(error, result) {
        console.log("result", result);
        response.render('book',
                        {
                          title: 'Books', 
                          nav: nav,
                          book: result
                        });
                        db.close();
      });
    });
  };

  return {
    getIndex: getIndex,
    getById: getById,
    middleware: middleware
  };
};

module.exports = bookController;
