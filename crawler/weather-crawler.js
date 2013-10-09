var jsdom = require('jsdom'),
	request = require('request');

jsdom.env(
	"http://www.weather.com/weather/tomorrow/Guatemala+City+GTXX0002:1:GT",
	["http://code.jquery.com/jquery.js"],
	function (errors, window) {
		var $ = window.$;

		var weather = $('.wx-daypart .wx-phrase');

		console.log( weather.html() );
	}
);