var express = require('express');
var assert = require('assert');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var port = 3000;
var objectID = require('mongodb').ObjectID;
var patients = require('./routes/patients');
var url = 'mongodb://localhost/clericApp';

app.use('/patients', patients);




MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log("There was an error connecting to the server bro");
	}
	else {
		console.log("Connected correctly to server");
	}
	assert.equal(null, err);
	db.close();
})

app.listen(port);

console.log('Magic happens on port ' + port);
 