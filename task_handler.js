// task_handler.js
// Handles requests to deal with tasks.
// Author: Zhanat Abylkassym
// Updated: Apr 2nd, 2014
// Location: Allston Place, Berkeley.

// ------------------------------
// FUNCTIONS
//
// ------------------------------
// TO DO:
// ------------------------------

// REQUIRED LIBRARIES
var myMongodb = require("./myMongodb");


function getTasksForUser(userId, callback){
  console.log("task_handler.js \t\t Get tasks for user ID #:" + userId);
  // 1. Get tasks for user  
  //console.log(myMongodb.collection);
  myMongodb.collection.find().toArray(function(err, doc){
    if(doc != null) console.log("Doc from Each ");
    console.dir(doc); //Displays an interactive list of the properties of the specified JavaScript object. 
    
    console.log(doc[0]._id);
    // 2. Callback on result
    callback(doc);
  });
}

function addTask(){
  console.log("task_handler.js \t\t Adding new task");

}



exports.getTasksForUser = getTasksForUser;
exports.addTask = addTask;
