// myMongodb.js
// Files for working with MongoDB.
// Author: Zhanat Abylkassym
// Updated: Apr 2nd, 2014
// Location: Allston Place, Berkeley.

// MongoDB settings and functions

// ------------------------------
// FUNCTIONS
//
// 1. connectToDB() - connest to a given DB on a server
// db.name - grittr
//
// 2. insertToDB() - insert document to collection.
//
// ------------------------------
// TO DO:
// 1. I am connecting via "localhost:port" seems like it will not work on AWS
//
// [x] 2. Close opened connections. They hang there until mongod is not "kill -9"-ed
// [x] all connections closes automatically when node.js server disconnects.
// [x] Coudn't find right funcation to close connection manually. 
//
// 3. Do I need to validate doc input in insertToDB(doc)?
// ------------------------------


// Retrieve
var MongoClient = require('mongodb').MongoClient;

var collection;

// Connect to the db
function connectToDB(){
  MongoClient.connect("mongodb://localhost:27017/grittr", function(err, db) {
    if(!err) {
      console.log("We are connected to MongoDB");

      collection = db.collection('tasks');
    }
    else {
      console.log("myMongodb: error at connection: " + err);
    }
  });
}

function insertToDB(doc) {
  console.log("myMongodb.js: \t\t Adding new record");

  // TO DO #3: do I need to validate incoming doc?
  collection.insert(doc, function(err, result) {
    if(err) throw err;
    console.log("myMongodb.js: \t\t record added as " + result[0]._id);
  });
}



exports.connectToDB = connectToDB;
exports.insertToDB = insertToDB;
