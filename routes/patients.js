var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Patient = require('../models/Patient.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, patients) {
    if (err) return next(err);
    res.json(patients);
  });
});

module.exports = router;