var jsdom = require('jsdom'),
	request = require('request');

jsdom.env(
	"http://www.nasdaq.com/symbol/fb",
	["http://code.jquery.com/jquery.js"],
	function (errors, window) {
		var $ = window.$;

		var facebookPrice = $('.qwidget-dollar');

		console.log( facebookPrice.html() );
	}
);