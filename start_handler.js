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


// REQUIRED LIBRARIES
var myMongodb = require("./myMongodb");
var task_handler = require("./task_handler");


// FUNCTIONS

function start_blank(response) {
  console.log("start_handler.js: \t\t start_blank() - starting Grittr");

//  console.log("start_handler.js: \t\t testing insertions to MongodDB")
//  var doc = {id:2, parentID:null, text:{caption:"one more task"}};
//  myMongodb.insertToDB(doc);  

  console.log("start_handler.js \t\t test data retrival from MongoDB");

  // send User ID
  var userId = 1; 

  var bodyTasks;
  task_handler.getTasksForUser(userId, function(tasksOfUser){
   console.log("start_handler.js \t\t List of tasks for UserId: " + tasksOfUser[0].userId); 

  var header = "<!DOCTYPE html><html lang='en'><html>\n<head>\n\t<title>GRITTR</title>\n\n";

  header += "\t <!-- Bootstrap --> \n";
  header += '\t<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">\n';


  header += "</head><body>";
  var footer = ' <!-- jQuery -->\n';
  footer += '<script src="jquery/jquery-2.1.0.js"></script>';
  footer += '<!-- Bootstrap script -->';
  footer += '<script src="bootstrap/js/bootstrap.min.js"></script>';
  footer += "</body></html>";

  var bodyAddTaskForm = "<h1> Task management</h1>";
    bodyAddTaskForm += "<form>";
    bodyAddTaskForm += "<input type='text'>";
    bodyAddTaskForm += "<input type='submit'>";
    bodyAddTaskForm += "</form>";
    bodyAddTaskForm += "<a href='http://127.0.0.1:8080/shut_the_crack_up'>close server</a><br>";

   //  for ( var i = 0; i < tasksOfUser[0].tasks.length; i++) {
       bodyTasks += "<div>"+tasksOfUser[0].tasks +"</div><br>"; 
    // }


//  var body = bodyAddTaskForm + bodyTasks;

var body =  "<!-- Fixed navbar -->";
 body +=  ' <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">';
 body +=  '      <div class="container">';
 body +=  '        <div class="navbar-header">';
 body +=  '          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">';
 body +=  '            <span class="sr-only">Toggle navigation</span>';
 body +=  '            <span class="icon-bar"></span>';
 body +=  '            <span class="icon-bar"></span>';
 body +=  '            <span class="icon-bar"></span>';
 body +=  '          </button>';
 body +=  '          <a class="navbar-brand" href="#">Bootstrap theme</a>';
 body +=  '        </div>';
 body +=  '        <div class="navbar-collapse collapse">';
 body +=  '          <ul class="nav navbar-nav">';
 body +=  '            <li class="active"><a href="#">Home</a></li>';
 body +=  '            <li><a href="#about">About</a></li>';
 body +=  '            <li><a href="#contact">Contact</a></li>';
 body +=  '            <li class="dropdown">';
 body +=  '              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>';
 body +=  '              <ul class="dropdown-menu">';
 body +=  '                <li><a href="#">Action</a></li>';
 body +=  '                <li><a href="#">Another action</a></li>';
 body +=  '                <li><a href="#">Something else here</a></li>';
 body +=  '                <li class="divider"></li>';
 body +=  '                <li class="dropdown-header">Nav header</li>';
 body +=  '                <li><a href="#">Separated link</a></li>';
 body +=  '                <li><a href="#">One more separated link</a></li>';
 body +=  '              </ul>';
 body +=  '            </li>';
 body +=  '          </ul>';
 body +=  '        </div><!--/.nav-collapse -->';
 body +=  '      </div>';
 body +=  '   </div> ';

  body +=  ' <div class="container theme-showcase" role="main">'; 

 body +=  '       <!-- Main jumbotron for a primary marketing message or call to action -->'; 
 body +=  '      <div class="jumbotron">'; 
 body +=  '        <h1>Hello, CS 470 Network engineering and management</h1>'; 
 body +=  '        <p>This is out course project on Networking. We are using Node.js Web Server on Mac OS X, client machine on Windows 8 and Wireshar machine on also Windows 8.</p> <p> Our team: <ol> <li>Yasaman Dibaji - Client Machine <li> Divya Singh - Wireshark Machine <li> Zhanat Abylkassym - Server machine </ol> '; 
 body +=  '        <p><a href="/img/Large_File.jpg" class="btn btn-primary btn-lg" role="button">Download File &raquo;</a></p>'; 
  body +=  '     </div> '; 

  body +=  ' <div class="page-header">'; 
  body +=  '        <h1>Buttons</h1>'; 
  body +=  '      </div>'; 
  body +=  '      <p>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-default">Default</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-primary">Primary</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-success">Success</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-info">Info</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-warning">Warning</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-danger">Danger</button>'; 
  body +=  '        <button type="button" class="btn btn-lg btn-link">Link</button>'; 
  body +=  '      </p> '; 
 body += ' </div>';

  var res_html = header + body + footer; 

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(res_html);
  response.end();


    }

 

  );
  console.log("start_hangle: \t\t start_blank() - OK;");
}

exports.start_blank = start_blank;
