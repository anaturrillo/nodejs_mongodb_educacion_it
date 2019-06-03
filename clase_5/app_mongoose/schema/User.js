const mongoose = require('mongoose');

var schema = new mongoose.Schema ({name: String, email: String, age: Number});
var Persona = mongoose.model('Persona', schema);

module.exports = Persona;
