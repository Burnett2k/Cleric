var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Patient = require('../models/Patient.js');

/* GET /Patient listing. */
router.get('/', function(req, res, next) {
  Patient.find(function (err, patients) {
  	console.log("getting patients");
    console.log(patients[0]);
    if (err) 
    	{
    		console.log(err);
    		return next(err);
    	}
    res.json(patients);
  });
});

/* POST /Patients */
router.post('/', function(req, res, next) {
  //should this be a 'save' instead of a create?
  Patient.create(req.body, function (err, post) {
  	console.log("posting patient");
  	console.log("req = " + req.toString());
  	console.log("res = " + res.toString());
    if (err) 
    	{
    		console.log(err);
    		return next(err);
    	}
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Patient.findById(req.params.id, function (err, post) {
  	console.log("finding patient by id");
  	console.log("res = " + res.toString());
  	console.log(res.toString());
    if (err) 
    	{
    		console.log(err);
    		return next(err);
    	}
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Patient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) 
    	{
    		console.log(err);
    		return next(err);
    	}
    res.json(post);
  });
});

module.exports = router;