const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Movie = model("Movie", MovieSchema);

module.exports = Movie;

