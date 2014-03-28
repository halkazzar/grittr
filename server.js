// Web server functions 

// start() - starts a web server on a given port



var http = require("http");

// Start Node.JS web server

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started on port 8080");
}

exports.start = start;


