var express = require('express.io');
var jsdom = require('jsdom');

var server = express();

var nextImageUrl;

server.http().io();

// Static assets
server.use(express.static('./public'));

server.get('/', function (req, res) {
	res.sendfile('./index.html');
});


var fetchImage = function () {
	if(!nextImageUrl){
		console.log('Getting home page');
		jsdom.env(
			"http://imgur.com/",
			["http://code.jquery.com/jquery.js"],
			function (errors, window) {
				var $ = window.$;

				var firstPost = $('.post:first a');
				nextImageUrl = 'http://imgur.com' + firstPost.attr('href');
				console.log('First Gallery ===>', nextImageUrl );

				setTimeout(function () {
					fetchImage();
				}, 1000);
			}
		);
	}else{
		console.log('Fetch gallery');

		jsdom.env(
			nextImageUrl,
			["http://code.jquery.com/jquery.js"],
			function (errors, window) {
				var $ = window.$;

				var firstPost  = $('#thumbs-top a:first');
				var firstImage = $('#image img:first');

				nextImageUrl = 'http://imgur.com' + firstPost.attr('href');
				currentImage = 'http:' + firstImage.attr('src');

				console.log('Next Gallery ===>', nextImageUrl );
				console.log('Current Image ==>', currentImage );

				server.io.broadcast('image', {image : currentImage});

				setTimeout(function () {
					fetchImage();
				}, 1000);
			}
		);
	}
};

fetchImage();

server.listen(3000);