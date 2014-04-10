// static_handler.js
// Handles requests for static files: JavaSctipts, CSS, favicon
// Author: Zhanat Abylkassym
// Updated: Apr 3d, 2014
// Location: Starbuck @ 27 Drumm Street, Financial District, SF. 

// ------------------------------
// FUNCTIONS
//
// ------------------------------
// TO DO:
// ------------------------------

fs = require("fs");

function staticHandler (response, pathUrl, pathname) {
//  console.log("static_handler.js: \t\t server static file");

  //this is an array of name of file and type.
  var fileType;
  var fileName = pathUrl[pathUrl.length-1].split(".");

//  console.log("static_handler.js: \t\t File name: "+ fileName[0] +"; File Type: " + fileName[fileName.length-1]+'; File Path: ' + pathname);

  if(fileName[fileName.length-1] == "css") fileType = "text/css";
  else if(fileName[fileName.length - 1] == "js") fileType = "text/javascript";
  else if(fileName[fileName.lenght - 1] == "png") fileType = "image/png";
  else if(fileName[fileName.length - 1] == "css") fileType = "image/ico";

  pathname = pathname.substr(1);
  fs.readFile(pathname, function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write("ERROR:" + error + "\n");
      response.end();
    }
    else {
      response.writeHead(200, {"Content-Type": fileType});
      response.write(file);
      response.end();
    }

  });
}

exports.staticHandler = staticHandler;
