var express = require('express');
var assert = require('assert');
var app = express();

var mongoose = require('mongoose');

var port = 3000;
var objectID = require('mongodb').ObjectID;

var patients = require('./routes/patients');
app.use('/patients', patients);

var url = 'mongodb://localhost/clericApp';





mongoose.connect(url, function(err) {
	if (err) {
		console.log("There was an error connecting to the server bro");
	}
	else {
		console.log("connection successful");
	}
	assert.equal(null, err);

})

app.listen(port);

console.log('Magic happens on port ' + port);
 