const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  size: String,
  duedate: Date,
  shipper: Schema.Types.ObjectId,
  driver: Schema.Types.ObjectId,
  pickup: String,
  dropoff: String,
  price: Number
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;