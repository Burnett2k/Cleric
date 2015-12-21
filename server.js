var express = require('express');
var assert = require('assert');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var port = 27017;
var objectID = require('mongodb').ObjectID;
var patients = require('./routes/patients');
var url = 'mongodb://127.1.0.1:27017/test';

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
 