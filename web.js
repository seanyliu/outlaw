var express = require('express');
var http = require('http');

var app = express();
app.configure(function(){
    app.use(express.static(__dirname));
});
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8080;
console.log("Listening on " + port);
server.listen(port);
