  const PetController = require('../controllers/pet.controller');

  module.exports= function(app){
    app.get("/api/", PetController.findAllPets);
    app.get("/api/:id", PetController.findOne);
    app.post("/api/new", PetController.createPet);
    app.put("/api/edit/:id", PetController.updatePet);
    app.delete("/api/del/:id", PetController.deletePet);
  }