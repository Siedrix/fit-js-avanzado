var request = require('request');
var fs = require('fs');
var i = 1;

var fileStream = fs.createWriteStream('file.txt');

var r = request.get("http://google.com");

r.on('data', function(data){
	fileStream.write(data);

	console.log('Writing chunk ', i++);
});

r.on('complete', function () {
	fileStream.end();
	console.log('Request completed');
});