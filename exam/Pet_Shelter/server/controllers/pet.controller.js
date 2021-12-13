const Pet = require("../models/Pets.model");

module.exports.createPet = (req, res) => {
  const { name, type, description, skill } = req.body;
  Pet.create({
    name,
    type,
    description,
    skill,
  })
    .then((pet) => res.json(pet))
    .catch((err) => res.status(400).json(err));
};

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then((alldaPets) => {
      res.json({ pets: alldaPets });
    })
    .catch((err) => {
      res.json({ message: "Soemthing went wrong", error: err });
    });
};

module.exports.findOne = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((pet) => res.json(pet))
    .catch((err) => res.json(err));
};

module.exports.updatePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => res.json(updatedPet))
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};
