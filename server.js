var express = require('express');
var assert = require('assert');
var app = express();

var mongoose = require('mongoose');

var port = 3000;

var patients = require('./routes/patients');
app.use('/patients', patients);

var url = 'mongodb://localhost/Cleric';

var createTestData = false;



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

if (createTestData) {
	var Patient = require('./models/Patient');

	var sawyer = new Patient({
	  username: 'burnett3k',
	  password: 'blah',
	  name: 'Sawyer Burnett',
	  age: 28,
	  weight: 170
	})

	sawyer.save(function(err) {
		if (err) throw err;
		console.log("created patient");
	});
}

console.log('Magic happens on port ' + port);
 