const Author = require("../models/authors.model");

module.exports.createAuthor = (req,res)=>{
  const{firstName, lastName} = req.body;
  Author.create({
    firstName,
    lastName 
  })
  .then(author => res.json(author))
  .catch(err => res.status(400).json(err))
}

module.exports.findAllAuthors = (req,res)=>{
  Author.find()
  .then((allDaAuthors) =>{
    res.json ({ authors : allDaAuthors })
  })
  .catch((err) =>{
    res.json({message:"something went wrong", error: err})
  });
}

module.exports.findOne =(req,res) =>{
  Author.findOne({_id:req.params.id})
  .then(author => res.json(author))
  .catch(err =>res.json(err))
}

module.exports.updateAuthor =(req,res) =>{
  Author.findOneAndUpdate 
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor=(req,res) =>{
  Author.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}