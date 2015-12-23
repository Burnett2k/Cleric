var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', WorkoutSchema);