// router.js
// Routes requests based on URL to corresponding handlers.
// Author: Zhanat Abylkassym
// Updated: Apr 1st, 2014
// Location: Startbucks at Fremont, Warm Springs.

// ------------------------
// FUNCTIONS
//
// route() - routes request to handler or 400

// ------------------------
// TO DO:
// 1. Check: do I use path_url and pathname?
// 2.
//
// ------------------------

function route(handle, path_url, response, postData, pathname) {
  console.log("router.js: \t About to route a request for\t" + pathname);

  if(typeof handle[path_url[1]] === 'function'){

                //Check: do I use path_url and pathname?
                handle[path_url[1]](response, postData, path_url, pathname);
        }
        else{
                console.log("router.js: No request handler for " + path_url[1]);
                response.writeHead(404, {"Content-Type":"text/plain"});
                response.write("router.js: 404 Not found");
                response.end();
        }



}

exports.route = route;
