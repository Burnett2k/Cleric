var mongoose = require('mongoose');

var WorkoutSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  userid: String,
  repsCompleted: Number,
  repsTotal: Number,
  dateCompleted: type: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', WorkoutSchema);