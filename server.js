var express = require('express');
var path = require('path');
var assert = require('assert');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');

var port = 3000;

var routes = require('./routes/index');
var patients = require('./routes/patients');
var workouts = require('./routes/workouts');



var url = 'mongodb://localhost/Cleric';

var createTestData = false;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/patients', patients);
app.use('/workouts', workouts);
//including views so I can serve up partials
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/stylesheets'));



// app.use(function(req, res, next) {
// 	var err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

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
	// var Patient = require('./models/Patient');

	// var sawyer = new Patient({
	//   username: 'burnett3k',
	//   password: 'blah',
	//   name: 'Sawyer Burnett',
	//   age: 28,
	//   weight: 170
	// })

	// var Workout = require('./models/Workout');

	// var stretch = new Workout({
	// 	  name: 'it band stretch',
	// 	  instructions: 'stretch it real good',
	// 	  username : 'burnett3k',
	// 	  repsCompleted: '1',
	// 	  repsTotal: '10',
	// 	  dateCompleted: '1/24/2016'
	// })

	// stretch.save(function(err) {
	// 	if (err) throw err;
	// 	console.log("created patient");
	// });
}

console.log('Magic happens on port ' + port);

module.exports = app;
 