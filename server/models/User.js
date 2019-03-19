const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  type: String,
  firstname: String,
  lastname: String,
  // license: String,
  // carmake: String,
  // carmodel: String,
  // caryear: String,
  address: String,
  city: String,
  usstate: String,
  zip: String,
  trips: Array,
  packages: Array
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
