const AuthorController = require('../controllers/author.controller');

module.exports= function(app) {
  app.get("/api/", AuthorController.findAllAuthors);
  app.get("/api/:id", AuthorController.findOne);
  app.post("/api/new", AuthorController.createAuthor);    
  app.put("/api/edit/:id", AuthorController.updateAuthor);
  app.delete("/api/del/:id", AuthorController.deleteAuthor)
}