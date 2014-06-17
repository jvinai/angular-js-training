var express = require('express');
var path = require("path");
var app = express();

app.use(express.urlencoded()); 
app.use(express.json());

var farts = [
		{text: "Being a dog is like living in a house with giants who always want to give you massages."},
		{text: "What if I have a mental illness but my family has never told me?"}
	];

app.get('/api', function(req, res) {
  res.json(farts);
});

app.post('/api/fart', function(req, res) {
	if(!req.body.hasOwnProperty('fart')) {
	res.statusCode = 400;
	return res.send('Error 400: Post syntax incorrect.');
	} 
 
	var newFart = {
	    text : req.body.fart
	  }; 
	 
	farts.unshift(newFart);
	res.json(farts);
});


app.use(express.static(path.join(__dirname, "app")));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('server listening on port ' + port);
