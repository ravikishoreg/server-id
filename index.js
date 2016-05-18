var http = require('http');
var getmac = require('getmac');
var port = 8080;

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	getmac.getMac(function(err,macAddress){
		if (err) 
		{
			response.write('<h1>Hello World! - Couldnt fetch mac addrees </h1> ' + err);
		}
		else
		{
			//console.log(macAddress);
			response.write('<h1>Hello World!' + macAddress + '</h1>');
		}
		response.end();
	})
});

server.listen(port, function() {
  console.log('Server working at http://localhost:' + port);
});
