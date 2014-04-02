// index.js
// Web app launcher
// Author: Zhanat Abylkassym
// Updated: Apr 1st, 2014
// Location: Startbucks at Fremont, Warm Springs.

// ---------------------
// FUNCTIONS

// ---------------------
// TO DO
//
// 1. Make and URL for properly shut down the server
// .. and disconnect from MongoDB
// ---------------------

// include all required libraries

var server = require("./server");
var myMongodb = require("./myMongodb");
var router = require("./router");
var start_handler = require("./start_handler");


var handle={}

handle[""] = start_handler.start_blank;
handle["shut_the_crack_up"] = server.close;

// Start Server; port number available in start()
server.start(router.route, handle);

// Connect to MongoDB
myMongodb.connectToDB();


