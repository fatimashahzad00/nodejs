let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
//   fs.readFile('demo.html', function (err, data) {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write(data);
//     return res.end()
//   })
//   fs.appendFile('mytxtfile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   fs.readFile('content.txt', function (err, data) {
//     res.writeHead(200, {'Content-type': 'text/document'});
//     res.write(data);
//     return res.end()
//   })
}).listen(3000);