var request = require('request');

var listener = function(data){
	console.log('**************************************************');
	console.log(data.toString());
};


r = request.get('https://yahoo.com').on('data', listener);

console.log(r)