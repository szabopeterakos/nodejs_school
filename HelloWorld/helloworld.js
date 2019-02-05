console.log('Hello Master');

let datetime = require('./mymodul');

let name = {
    fname: 'Norris',
    lname: 'Chuck',
    date: datetime.myDateTime()
}

let http = require('http');
http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(name));
    }
).listen(4200);
