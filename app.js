const http = require('http');
var fs = require("fs");

const hostname = '127.0.0.1';
const port = 4000;

const data =fs.readFileSync('index.txt', 'utf8');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });