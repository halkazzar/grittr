// MongoDB settings and functions

// ------------------------------
// FUNCTIONS

// connect() - connest to a given DB on a server

// ------------------------------
// TO DO:
// 1. I am connecting via "localhost:port" seems like it will not work on AWS
// 2. Close opened connections. They hang there until mongod is not "kill -9"-ed


// ------------------------------


// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
function connectToDB(){
  MongoClient.connect("mongodb://localhost:27017/grittr", function(err, db) {
    if(!err) {
      console.log("We are connected to MongoDB");
    }
  });
}

exports.connectToDB = connectToDB;

