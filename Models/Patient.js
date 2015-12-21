var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Patient', PatientSchema);