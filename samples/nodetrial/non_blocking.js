//Non Blocking JS code.

function twice(number, callback) {
	var twice_the_numer = number*2;
	callback(twice_the_numer);
}

twice(2, function (result) {
	setTimeout(function(){
		console.log("Result is :" + result);
	}, 5000);
});

// Blocking JS Code
console.log("I am the first line");
console.log("I am the second line");
console.log("This is the last line of code");



