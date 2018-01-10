var async = require('async');
var request = require('request');

async.parallel({
    one: function(parallelCb) {
        request('http://www.example1.com', function (err, res, body) {
			parallelCb(null, {body: body});
        });
    },
    two: function(parallelCb) {
        request('http://www.example2.com', function (err, res, body) {
			parallelCb(null, {body: body});
        });
    },
    three: function(parallelCb) {
        request('http://www.example3.com', function (err, res, body) {
			parallelCb(null, {body: body});
        });
    }
}, function(err, results) {
    // results will have the results of all 3
    console.log(results.one);
 	console.log(results.two);
    console.log(results.three);
});