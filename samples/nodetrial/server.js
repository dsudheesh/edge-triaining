var http = require('http');
var server = http.createServer(function (request, response){
	response.writeHead(200, {"Content-Type" : 'text/plain'});
	response.end("Hello.! From server.!");
});

server.listen(8888, function (){
console.log('Server listening on port 8888');
});