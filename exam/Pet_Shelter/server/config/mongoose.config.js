const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pets",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to database'))
  .catch(err => console.log('Something went wrong', err));