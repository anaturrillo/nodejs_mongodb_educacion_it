const http = require('http');
const https = require('https');
const router = require('./router');

const portHttp = 8080

const server = ( req, res ) => {
	console.log(req.url)
	console.log(req.method)
	console.log(router)
	const resource = req.url.replace('/', '');
	const method = req.method.toLowerCase();

	if (router[method][resource]) {
		res.writeHeader(200)
		res.end(router[method][resource])
	} else {
		res.writeHeader(404)
		res.end('la ruta a la que quiere acceder no existe')
	}
}

const serverHttp = http.createServer(server);

serverHttp.listen(portHttp, function(){
	console.log(`Server escuchando en el puerto ${portHttp}`)
})
