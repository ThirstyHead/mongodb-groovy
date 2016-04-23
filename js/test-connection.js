var MongoClient = require("vertx-mongo-js/mongo_client");
var config = {
	'db_name': 'gids',
	'connection_string': 'mongodb://localhost:27017'
}

var client = MongoClient.createShared(vertx, config);