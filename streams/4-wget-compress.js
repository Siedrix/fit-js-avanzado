var request = require('request');
var oppressor = require('oppressor');
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

request
.get("http://google.com")
.pipe( gzip )
.pipe( fs.createWriteStream('google.zip') );