const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const PersonSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});

const Person = model("person", PersonSchema);

module.exports = Person;
