var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Patient = require('../models/Patient.js');

/* GET /Patient listing. */
router.get('/', function(req, res, next) {
  Patient.find(function (err, patients) {
    if (err) return next(err);
    res.json(patients);
  });
});

/* POST /Patients */
router.post('/', function(req, res, next) {
  Patient.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;