const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  size: Number,
  duedate: Date,
  owner: String,
  driver: String,
  pickup: String,
  dropoff: String,
  price: Number
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;