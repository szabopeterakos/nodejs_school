let http = require('http');
let url = require('url');

//create a server object:
http.createServer(
    function(req,res){
        res.writeHead(200,{'ContentType':'text/html'});

        let q = url.parse(req.url,true).query;
        let text = q.year + " " + q.month;
        res.end(text); //end the response
    }
).listen('4200'); //the server object listens on port 8080