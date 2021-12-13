const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name:{
    required:[
      true,
      "Name is required"
    ],
    type: String,
    minlength: [3, "must be 3 characters or more"]
  },  
  type:{
    required:[
      true,
      "type is required"
    ],
    type: String,
    minlength:[3, "must be 3 characters or more"]

  },
  description:{
    required:[
      true,
      "description required"
    ],
    type: String,
    minlength:[3,"must 3 characters or more"]
  },
  skill:{
    type: Array,
    max: [3, "only 3 skills allowed"]
  }
})

module.exports = mongoose.model('Pet', PetSchema);