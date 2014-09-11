var express = require( 'express' ),
	app        = express(),
	bodyParser = require( 'body-parser' ),
	xmlParser  = require( './RSSFeedParser/xmlToJson' );

app.use( bodyParser.urlencoded() ); //for passing data in get/post ?name=value
app.use( bodyParser.json() ); //for passing json data
app.use(express.static(__dirname + '/')); //to serve files

app.post( '/RSSFeedParser/convert' , function( req, res){
	var data   = xmlParser.loadXMLDoc( req.body.rssurl );
	var pretty = data.replace(/\n/gm,'<br>');
	res.send( 'You have inputted ' + req.body.rssurl + '<br>'+pretty.replace(/\t/gm, '&nbsp'));


} );

app.listen(7000, function () {
	console.log( 'listening to port 7000' );
});

