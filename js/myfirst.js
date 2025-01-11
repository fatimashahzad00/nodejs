let http = require("http");
// let date = require('./module/dateModule')
let url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("This is a current date and time: " + date.myDateTime())
    let q = url.parse(req.url, true).query;
    console.log(q);
    let text = q.year + " " + q.month;
    res.write(text);
    res.end();
  })
  .listen(3000);
