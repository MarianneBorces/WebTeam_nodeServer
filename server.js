var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(7000, function () {
	console.log( 'listening to port 7000' );
});