var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'books',
	'connection_string': 'mongodb://localhost:27017'
}
var client = MongoClient.createShared(vertx, config);

// Document has no id
var document = {
  "_id": "571bf4620ced03507d54cf3c",	
  "title" : "The Hobbit",
  "author": "JRR Tolkien"
};

client.save("books", document, function (res, res_err) {
  if (res_err == null) {
    var id = res;
    console.log("Saved book with id " + id);
  } else {
    res_err.printStackTrace();
  }

});