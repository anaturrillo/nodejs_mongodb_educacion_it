const fs = require('fs');
const config = require('../config');

const updateFile = callback => {
  fs.open(`${config.path}/file.txt`, 'r+', (err, fd) => {
    if(!err) {

      fs.ftruncate(fd, (err) => {
        if(!err){

          fs.writeFile(fd, 'Este es un nuevo texto', (err) => {
            if(!err) {
              callback(null, 'El archivo fue modificado exitosamente')
            } else {
              callback(err)
            }
          })

        } else {
          callback(err)
        }
      })

    } else {
      callback(err)
    }
  })
};

module.exports = updateFile;