const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieDataSchema = new Schema({
  title: {type: String},
  overview: {type: String},
  status: {type: String},
  tagline: {type: String}, 
  poster_path: {type: String}, 
  original_title: {type: String},
  original_language: {type: String},
  release_date: {type: String},
  status: {type: String},
  id: {type: Number},
  genres: [{
    any: [Schema.Types.Mixed]
  }]
})

const MovieSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  movie_data: [MovieDataSchema]
}, {timestamps: true})

const Movie = mongoose.model('Movie', MovieSchema);
const MovieMetaData = mongoose.model('MovieMetaData', MovieDataSchema);
module.exports = { Movie, MovieMetaData, MovieDataSchema };