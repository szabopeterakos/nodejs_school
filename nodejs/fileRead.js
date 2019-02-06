var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demo.html', function (err, data) {
        res.writeHead(200, { 'ContentType': 'text/html'});
        res.write(data);
        res.end;
    })
}).listen(8080);

fs.writeFile('manoka.txt','Tony Stark','utf8',()=>console.log('saved. manoka'));
fs.writeFile('manoka2.txt','Tony Stark','utf8',()=>console.log('saved. manoka2'));

fs.unlink('manoka2.txt',()=>console.log('deleted manoka2.txt'));

fs.rename('manoka.txt', 'manomisi.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

// process.exit();
