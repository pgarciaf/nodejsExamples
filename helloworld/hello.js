// paquetes requeridos
var http = require('http');

// crear el server en el puerto 1234
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo !!!');
}).listen(1234);

console.log('Se ha iniciado el server en http://localhost:1234');