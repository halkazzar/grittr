// include all required libraries

var server = require("./server");
var myMongodb = require("./myMongodb");

// Start Server; port number available in start()
server.start();

// Connect to MongoDB
myMongodb.connectToDB();


