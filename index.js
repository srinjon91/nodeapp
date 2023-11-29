var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World This is new world!');
}).listen(3000);