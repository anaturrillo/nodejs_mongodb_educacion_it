const http = require('http');
const template = require('./template.js');

const server = http.createServer(function(req, res){
	console.log(req.url)
	console.log(req.method)

	res.writeHead(400)
	
	res.end(template)
})

server.listen(8080, function(){
	console.log('Server levantado escuchando puerto 8080')
})