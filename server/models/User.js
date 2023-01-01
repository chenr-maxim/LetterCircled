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
  liked_movies: [{
    movie_meta_data: MovieDataSchema
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