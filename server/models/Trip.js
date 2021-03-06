const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  date: Date,
  start: String,
  end: String,
  packages: Array,
  driver: Schema.Types.ObjectId,
  pickupspots: Array,
  dropoffspots: Array,
  earnings: Number
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;