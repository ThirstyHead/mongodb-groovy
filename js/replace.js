var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'books',
	'connection_string': 'mongodb://localhost:27017'
}
var client = MongoClient.createShared(vertx, config);

var query = {
  "title" : "The Hobbit"
};

var replace = {
  "title" : "The Lord of the Rings",
  "author" : "J. R. R. Tolkien"
};

client.replace("books", query, replace, function (res, res_err) {
  if (res_err == null) {
    console.log("Book replaced !");
  } else {
    res_err.printStackTrace();
  }
});