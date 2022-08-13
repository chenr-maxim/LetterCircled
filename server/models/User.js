const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  watched_movies: [{
    type: mongoose.Schema.Types.Mixed
  }],
  username: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;