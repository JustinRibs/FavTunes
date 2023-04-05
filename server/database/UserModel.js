const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user: String,
  password: String,
  artists: Array,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
