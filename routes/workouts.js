var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Workout = require('../models/Workout.js');

/* GET /Workout listing. */
router.get('/', function(req, res, next) {
  Workout.find(function (err, Workouts) {
    if (err) return next(err);
    res.json(Workouts);
  });
});

/* POST /Workouts */
router.post('/', function(req, res, next) {
  Workout.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;