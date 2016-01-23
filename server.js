var express = require('express');
var http = require('http')

var app = express()
var httpServ = http.createServer(app)

var server = httpServ.listen(3000, function() {
	
	console.log('app listening');
	
});

app.use(express.static('public'))


