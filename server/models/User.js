const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { MovieDataSchema } = require('./Movie');

const UserSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  watched_movies: [{
    type: Schema.Types.Mixed
  }],
  liked_movies: [{
    type: Schema.Types.Mixed
  }],
  username: {
    type: String
  },
  watched_movies_list: [{
    movie_meta_data: MovieDataSchema,
    rating: {type: Number}
  }]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;