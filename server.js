// server.js 
// Web server functions
// Author: Zhanat Abylkassym
// Updated: Apr 1st, 2014
// Location: Startbucks at Fremont, Warm Springs.

// -------------------------
// FUNCTIONS
//
// start() - starts a web server on a given port
// close() - close connection to MongoDB, close NodeJS server.

// ------------------------
// TO DO 
//
// ------------------------

var http = require("http");
var url = require("url");
var myMongodb = require("./myMongodb");

// Start Node.JS web server
// route - is function variable, which we pass from index.js
var server; 

function start(route, handle) {
  function onRequest(request, response) {

    // take care of POST requests
    var postData = "";

    // parse URL by "/" to get actual path
    var pathUrl = url.parse(request.url).pathname.slice(0).split("/");
    console.log("server.js \t\t pathUrl = " + pathUrl);
    
    // whole Path
    var pathname = url.parse(request.url).pathname;
    console.log("server.js \t\t pathname = " + pathname);
  
    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("[server.js]: Received POST data chunk '"+
      postDataChunk + "'.");
      }
    );

    request.addListener("end", function() {
      // handle - array of handlers; 
      // pathUrl - part of URL right after domain and slash;
      // postData - POST request; 
      // pathname - full URL requested
      
      route(handle, pathUrl, response, postData, pathname);
      }
     );
  }

  //transmitted onRequest function as parameter and created server        
  server = http.createServer(onRequest, function(request,response){}).listen(8080);

  console.log("server.js: \t Server has started on port 8080.");
 
}

function close(){
  var sockets = [];

  server.on('connection', function (socket) {
    sockets.push(socket);
    socket.setTimeout(4000);
    socket.on('close', function () {
      console.log('socket closed');
      sockets.splice(sockets.indexOf(socket), 1);
    });
  });

  setTimeout(function () {
    server.close(function () {
      console.log('Server closed!');
    });

    for (var i = 0; i < sockets.length; i++) {
      console.log('socket #' + i + ' destroyed');
      sockets[i].destroy();
    }
  }, 10 * 300);

  var i = 3;
  var x = setInterval(function () {
    console.log(i--);
    if (i === -1) {
      clearInterval(x);
      return;
    }
  }, 300);


}


exports.start = start;
exports.close = close;
