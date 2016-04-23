var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'books',
	'connection_string': 'mongodb://localhost:27017'
}
var client = MongoClient.createShared(vertx, config);

// Match any documents with title=The Hobbit
var query = {
  "author" : "J. R. R. Tolkien"
};

// Set the author field
var update = {
  "$set" : {
    "genre":"Fantasy"
  }
};

var options = {
  "multi" : true
};

client.updateWithOptions("books", query, update, options, function (res, res_err) {
  if (res_err == null) {
    console.log("Book(s) updated !");
  } else {
    res_err.printStackTrace();
  }
});