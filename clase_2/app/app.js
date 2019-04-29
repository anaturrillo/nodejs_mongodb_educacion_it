const http = require('http');
const https = require('https');
const router = require('./router');

const portHttp = 8080;

const server = ( req, res ) => {
	const resource = req.url.replace('/', '');
	const method = req.method.toLowerCase();
	const handler = router[resource][method];

	if (handler) {
		res.writeHeader(200);

		handler((err, data) => {
			if (!err) {
				res.end(JSON.stringify(data))
			} else {
				res.end(JSON.stringify(err))
			}
		})
		
	} else {
		res.writeHeader(404);
		res.end('la ruta a la que quiere acceder no existe')
	}
};

const serverHttp = http.createServer(server);

serverHttp.listen(portHttp, function(){
	console.log(`Server escuchando en el puerto ${portHttp}`)
});
