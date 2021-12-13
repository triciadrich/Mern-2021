const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
  firstName:{
    required:[
        true,
        "Name is required"
    ],
    type: String,
    minLength: [3, "Must be more than 3 characters"]
  },
  lastName:{
    required:[
        true,
        "Name is required"
    ],
    type: String,
    minLength: [3, "Must be more than 3 characters"]
  }
})

module.exports = mongoose.model('Author', AuthorSchema);  