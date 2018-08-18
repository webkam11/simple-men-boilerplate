const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('user', userSchema);
