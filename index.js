// index.js
// Web app launcher
// Author: Zhanat Abylkassym
// Updated: Apr 2nd, 2014
// Location: Allston Place, Berkeley.

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
var task_handler = require("./task_handler");
var static_handler = require("./static_handler");

var handle={}

// Basic handler 
handle[""] = start_handler.start_blank;
handle["shut_the_crack_up"] = server.close;
handle["addTask"] = task_handler.addTask; 


// Static file handlers
handle["jquery"] = static_handler.staticHandler;
handle["bootstrap"] = static_handler.staticHandler;



// Start Server; port number available in start()
server.start(router.route, handle);

// Connect to MongoDB
myMongodb.connectToDB();


