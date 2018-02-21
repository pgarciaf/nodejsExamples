// paquetes requeridos
var http = require('http');
var loModulo = require('./primerModulo');

// crear el server en el puerto 1234
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hola Mundo!!!, estoy usando un modulo propio que me dice la hora: ' + loModulo.laFecha());
}).listen(1234);

console.log('Se ha iniciado el server en http://localhost:1234');