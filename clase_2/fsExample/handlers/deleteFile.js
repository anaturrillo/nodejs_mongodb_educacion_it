const fs = require('fs');
const config = require('../config');

const deleteFile = callback => {
  fs.unlink(`${config.path}/file.txt`, err => {
    if (!err) {
      callback(null, 'El archivo fue eliminado con exito')
    } else {
      callback(err)
    }
  })
};

module.exports = deleteFile;