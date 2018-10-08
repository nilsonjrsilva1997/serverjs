var http = require('http');

http.createServer(function(request, response) {
    response.end("<html><head></head><body>Ola mundo</body></html>");
}).listen(4200, "localhost");

console.log("servidor rodando");