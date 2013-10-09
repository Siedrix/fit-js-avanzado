var request = require('request');
var fs = require('fs');

request
.get("http://isaacs.couchone.com/registry/_all_docs?include_docs=true")
.pipe( fs.createWriteStream('big.json') );

