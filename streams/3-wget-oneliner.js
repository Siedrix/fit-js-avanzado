var request = require('request');
var fs = require('fs');

request
.get("http://google.com")
.pipe( fs.createWriteStream('google.html') );