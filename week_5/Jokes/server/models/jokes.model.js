const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  joke: {
    type: String,
  },
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
