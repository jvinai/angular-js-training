var express = require('express');
var path = require("path");
var app = express();

app.use(express.urlencoded()); 
app.use(express.json());

var thoughts = [
		{text: "Being a dog is like living in a house with giants who always want to give you massages."},
		{text: "What if I have a mental illness but my family has never told me?"}
	];

app.get('/api', function(req, res) {
  res.json(thoughts);
});

app.post('/api/thought', function(req, res) {
	if(!req.body.hasOwnProperty('thought')) {
	res.statusCode = 400;
	return res.send('Error 400: Post syntax incorrect.');
	} 
 
	var newThought = {
	    text : req.body.thought
	  }; 
	 
	thoughts.unshift(newThought);
	res.json(thoughts);
});

app.get('/api/stats', function(req, res) {
	var stats = {
		nrOfThoughts: thoughts.length
	};

	res.json(stats);
});

app.use(express.static(path.join(__dirname, "app")));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('server listening on port ' + port);
