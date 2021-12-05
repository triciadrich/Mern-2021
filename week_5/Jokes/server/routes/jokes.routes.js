const JokesController = require("../controllers/jokes.controller");



module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAllJokes);
  app.get("/api/joke/:id", JokesController.findOneSingleJoke);
  app.put("/api/joke/:id", JokesController.updateExistingJoke);
  app.post("/api/joke", JokesController.createNewJoke);
  app.delete("/api/joke/:id", JokesController.deleteAnExistingJoke);
};
