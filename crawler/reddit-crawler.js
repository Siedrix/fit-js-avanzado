var jsdom = require('jsdom'),
	request = require('request');

jsdom.env(
	"http://reddit.com/",
	["http://code.jquery.com/jquery.js"],
	function (errors, window) {
		var $ = window.$;

		var topArticle = $('.sitetable .entry:first a:first');

		console.log( topArticle.html(), topArticle.attr('href') );
	}
);