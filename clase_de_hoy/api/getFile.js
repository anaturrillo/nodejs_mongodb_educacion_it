module.exports = (fs, config) => (fileName, callback) => {
  fs.readFile(`${config.path}/${fileName}.txt`, 'utf-8', (err, data) => {
    if (!err && data) {
      try {
        const response = JSON.parse(data);
        callback(null, response)
      } catch (e) {
        callback({e, msd: 'Error al parsear el contenido del archivo'})
      }
    } else {
      callback({err, msg: 'Error al leer el archivo'})
    }
  })
};