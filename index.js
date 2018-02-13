const express = require('express');
const http = require('http');
const morgan = require ('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // use morgan in development version

app.use(express.static(__dirname + '/public')); // serve html files from public directory

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

//setup the server:
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});