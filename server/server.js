var express = require('express');
var http = require('http');

var port = process.env.PORT || '3210';

var app = express();
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(__dirname + '/../public'));

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);

console.log('server started on http://localhost:' + port );
