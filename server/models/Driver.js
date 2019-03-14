const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  firstname: String,
  lastname: String,
  license: String,
  carmake: String,
  carmodel: String,
  caryear: String,
  address: String,
  trips: Array,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;