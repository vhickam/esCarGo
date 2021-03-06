const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipperSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  packages: Array
});

const Shipper = mongoose.model('Shipper', shipperSchema);

module.exports = Shipper;