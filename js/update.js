var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'books',
	'connection_string': 'mongodb://localhost:27017'
}
var client = MongoClient.createShared(vertx, config);

// Match any documents with title=The Hobbit
var query = {
  "title" : "The Hobbit"
};

// Set the author field
var update = {
  "$set" : {
    "author" : "J. R. R. Tolkien"
  }
};

client.update("books", query, update, function (res, res_err) {
  if (res_err == null) {
    console.log("Book updated !");
  } else {
    res_err.printStackTrace();
  }
});