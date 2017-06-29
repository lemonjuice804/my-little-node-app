var express = require('express');
var app = express();
var path = require('path');

console.log('** dirname from /server:' + __dirname);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('/assets/main.html');
});

app.listen(8080);
