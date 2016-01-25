var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

var router = function(nav) {
  adminRouter.route('/addBooks')
             .get(function(request, response) {
               var url = 'mongodb://localhost:27017/libraryApp';
               mongodb.connect(url, function(error, db) {
                 var collection = db.collection('books');
                 collection.insertMany(books, function(error, results) {
                   response.send(results);
                   db.close();
                 });
               });
             });

  return adminRouter;
};

module.exports = router;
