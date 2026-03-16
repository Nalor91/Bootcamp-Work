const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

dogSchema.statics.register = async function(name, breed, age, description) {
  const dog = await this.create({ name, breed, age, description });
  return dog;
};

const Dog = mongoose.model('dog', dogSchema);
module.exports = Dog;
