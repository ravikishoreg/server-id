var http = require('http');
var port = 8080;

require('getmac').getMac(function(err,macAddress){
	if (err)  throw err
	console.log(macAddress);

	var server = http.createServer(function(request, response) {
	  response.writeHead(200, {'Content-Type': 'text/html'});
	  response.write('<h1>Hello World!' + macAddress + '</h1>');
	  response.end();
	});

	server.listen(port, function() {
	  console.log('Server working at http://localhost:' + port);
	});
})
