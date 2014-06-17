var express = require('express');
var path = require("path");
var app = express();

app.use(express.urlencoded()); 
app.use(express.json());

app.use(express.static(path.join(__dirname, "app")));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('server listening on port ' + port);
