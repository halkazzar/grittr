// start_handler.js 
// Handles requests to start the app.  
// Author: Zhanat Abylkassym
// Updated: Apr 2d, 2014
// Location: Allston Place, Berkeleys.

// ---------------------
// FUNCTIONS

// ---------------------
// TO DO
//
// ---------------------

var myMongodb = require("./myMongodb");

function start_blank(response) {
  console.log("start_handler.js: \t\t start_blank() - starting Grittr");

  var header = "<html>\n<head>\n\t<title>GRITTR</title>\n\n";

  header += "\t <!-- Bootstrap --> \n";
  header += '\t<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">\n';


  header += "</head><body>";
  var footer = ' <!-- jQuery -->\n';
  footer += '<script src="jquery/jquery-2.1.0.js"></script>\n';
  footer += '<!-- Bootstrap script -->\n';
  footer += '<script src="bootstrap/js/bootstrap.min.js"></script>\n';
  footer += "</body></html>\n";

  var body = "<h1> Task management</h1>";
    body += "<form>";
    body += "<input type='text'>";
    body += "<input type='submit'>";
    body += "</form>";

  var res_html = header + body + footer; 

  console.log("start_handler.js: \t\t testing insertions to MongodDB")

  var doc = {id:2, parentID:null, text:{caption:"one more task"}};

  myMongodb.insertToDB(doc);  

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(res_html);
  response.end();

  console.log("start_hangle: \t\t start_blank() - OK;");
}

exports.start_blank = start_blank;
