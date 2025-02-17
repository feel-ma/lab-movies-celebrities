const { Schema, model } = require('mongoose');

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celeb = model("Celebrity", CelebritySchema);

module.exports = Celeb;

