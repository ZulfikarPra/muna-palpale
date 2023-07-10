const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  weight: {
    type: Array,
  },
}, {
  timeStamps: true,
},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
