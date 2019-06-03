const Persona = require('../schema/User');
module.exports.createUser = (userData, callback) => {
  const newUser = new Persona(userData);
  newUser.save(function (err) {
    if (!err) {
      callback(null)
    } else {
      callback(err)
    }
  })
};

module.exports.getUsers = (callback) => {
  Persona.find().exec((err, data) => {
    if(!err) {
      callback(null, data.map(e => e.email))
    } else {
      callback(err)
    }
  })
};

module.exports.getUser = (email, callback) => {
  Persona.find({email}).exec((err, data) => {
    if(!err) {
      callback(null, data)
    } else {
      callback(err)
    }
  })
};
