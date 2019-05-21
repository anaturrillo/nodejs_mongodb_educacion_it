const fs = require('fs');
const config = require('../config')

module.exports = (user, callback) => {
  const fileName = `user-${user.usuario}`;

  fs.open(`${config.path}/${fileName}.txt`, 'wx', (err, fd) => {
    if (!err) {
      fs.writeFile(fd, JSON.stringify(user), err => {
        if(!err) {

          fs.close(fd, err => {
            if (!err) {
              callback(null, {msg: `El archivo ${fileName}.txt fue creado exitosamente`})
            } else {
              callback({err, msg:`Error cerrando el archivo ${fileName}`})
            }
          })

        } else {
          callback({err, msg:`Error escribiendo el archivo ${fileName}`})
        }

      })
    } else {
      callback({err, msg:`Error abriendo el archivo ${fileName}`})
    }
  })
};