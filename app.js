var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');

app.set('view engine', 'html');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen('8081', function() {
  console.log("Listening On:   http://localhost:8081/");
});
