var express = require('express');
var fs = require('fs')
app = express();

// read in the APP_MSG env var
var msg = process.env.texto;

var response;

app.get('/', function (req, res) {
    response = 'Value in the texto env var is => ' + msg + '\n';
    res.send(response);
});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
