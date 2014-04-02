// start_handler.js 
// Handles requests to start the app.  
// Author: Zhanat Abylkassym
// Updated: Apr 1st, 2014
// Location: Startbucks at Fremont, Warm Springs.

// ---------------------
// FUNCTIONS

// ---------------------
// TO DO
//
// ---------------------


function start_blank(response) {
  console.log("start_handler.js: \t start_blank() - starting Grittr");

  var res_html =  "TEST STARTING GRITRR";

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(res_html);
  response.end();

  console.log("start_hangle: \t start_blank() - OK;");
}

exports.start_blank = start_blank;
