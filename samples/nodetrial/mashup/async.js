var async = require('async');
var request = require('request');


// Execute functions in parallel without waiting for previous function to complete
async.parallel({
    one: function(parallelCb) {
        setTimeout(function () {
			parallelCb( null, "I am the first parallel function");
        }, 5000);
    },
    two: function(parallelCb) {
    	parallelCb(null, "I am the second parallel function");
    	console.log("I was called second but I am done");
    	
    },
    three: function(parallelCb) {
        parallelCb(null, "I am the third parallel function");
        console.log("I was called third but I am done as well");
    }
}, function(err, results) {
    // results will have the results of all 3
    console.log(results.one);
	console.log(results.two);
    console.log(results.three);
});

// Execute an array of functions in series with each function passing its results to the next in the array

async.waterfall([
	firstFunction,
	secondFunction,
	thirdFunction
],
function(err, results){
	console.log("The final string is" + results);
});

function firstFunction(callback) {
	callback(null, 'It', 'was')
}

function secondFunction(arg1, arg2, callback) {
	var all = arg1 + arg2;
	callback(null, all, 'an', 'amazing day!');
}

function thirdFunction(arg1, arg2, arg3, callback) {
	var all = arg1+arg2+arg3;
	callback(null, all);
}
