console.log('Hello Master');

let http = require('http');
http.createServer(
    function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('Chuck Norris');
    }
).listen(4200);