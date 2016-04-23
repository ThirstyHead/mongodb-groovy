var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'books',
	'connection_string': 'mongodb://localhost:27017'
}
var client = MongoClient.createShared(vertx, config);

// Document has an id already
var document = {
  "title" : "The Hobbit"
};

mongoClient.insert("books", document, function (res, res_err) {
  if (res_err == null) {

    var id = res;
    console.log("Inserted book with id " + id);

  } else {
    res_err.printStackTrace();
  }

});