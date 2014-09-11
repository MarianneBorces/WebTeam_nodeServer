 var fs = require( 'fs' );
 var xml2js = require( 'xml2js' );


 exports.loadXMLDoc = function( filePath ) {
 	var json = {};

 	try {
 		var fileData = fs.readFileSync( filePath );

 		var parser = new xml2js.Parser();

 		parser.parseString( fileData, function( err, result ) {
 			json = JSON.stringify( result, null , '\t' );
 		} );

 		return json;

 	} catch ( ex ) {
 		return {
 			error   : true,
 			details : ex
 		};
 	}
 };