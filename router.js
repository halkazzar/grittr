// router.js
// Routes requests based on URL to corresponding handlers.
// Author: Zhanat Abylkassym
// Updated: Apr 3d, 2014
// Location: Starbuck @ 27 Drumm Street, Financial District, SF.
 
// ------------------------
// FUNCTIONS
//
// route(handle, path_url, response, postData, pathname)  - routes request to handler or 400
  // handle - array of handlers; 
  // pathUrl - part of URL right after domain and slash;
  // postData - POST request; 
  // pathname - full URL requested
  
  // for pathname = /bootstrap/css/bootstrap.min.css
  // pathUrl = ,bootstrap,css,bootstrap.min.css

// ------------------------
// TO DO:
// 1. Check: do I use pathUrl and pathname?
// 2.
//
// ------------------------


function route(handle, pathUrl, response, postData, pathname) {
 // console.log("router.js: \t About to route a request for\t" + pathname);

  if(typeof handle[pathUrl[1]] === 'function'){
    // call actual handler
    handle[pathUrl[1]](response, pathUrl, pathname);
   }
    else{
                console.log("router.js: No request handler for " + pathUrl[1]);
                response.writeHead(404, {"Content-Type":"text/plain"});
                response.write("router.js: 404 Not found");
                response.end();
        }



}

exports.route = route;
