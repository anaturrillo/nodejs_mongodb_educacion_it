module.exports = (fs, config) => (fileName, callback) => {
  fs.readFile(`${config.path}/${fileName}.txt`, 'utf-8', (err, data) => {
    if (!err && data) {
      callback(null, data)
    } else {
      callback({err, msg: 'Error al leer el archivo'})
    }
  })
};