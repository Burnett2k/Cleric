var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  age: Number,
  weight: Number,
  updated_at: { type: Date, default: Date.now }
});

var Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;