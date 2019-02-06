let up = require('upper-case');
let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(up("Hello World!"));
  res.end();
}).listen(8080);
