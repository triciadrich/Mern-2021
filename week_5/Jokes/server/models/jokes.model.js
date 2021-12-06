const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  name: String,
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
