const fs = require('fs');
const config = require('../config');

const createFile = callback => {
  fs.open(`${config.path}/file.txt`, 'wx', (err, fd) => {
    if (!err) {

      fs.writeFile(fd, 'Este texto va en el archivo', (err) => {
        if(!err) {

          fs.close(fd, (err) => {
            if(!err){
              callback(null, 'El archivo fue creado con exito')
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

module.exports = createFile;