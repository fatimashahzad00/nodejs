let http = require('http');
let url = require('url');
// let dt = require('./module/dateModule')

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'})
    // console.log(http.IncomingMessage);
    // res.write(req.url)

    let q = url.parse(req.url, true).query;
    let txt = q.month + " " + q.year;
    console.log(q);
    res.write(txt)
    res.end()
}).listen(8080);

console.log('hello world');


