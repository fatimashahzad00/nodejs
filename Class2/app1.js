import {upperCase} from 'upper-case'
let http = require("http");
// let url = require("url");
// let fs = require("fs");
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   let q = url.parse(req.url, true).query;
//   let txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

http
  .createServer(function (req, res) {
    //   let q = url.parse(req.url, true);
    //   let filename = "." + q.pathname;
    //   fs.readFile(filename, function(err, data) {
    //     if (err) {
    //       res.writeHead(404, {'Content-Type': 'text/html'});
    //       return res.end("404 Not Found");
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(upperCase("Hello World!"));
    res.end();
  })
  .listen(8080);
