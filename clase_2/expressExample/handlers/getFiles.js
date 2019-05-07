module.exports = (fs, config) => (callback) => {
  fs.readdir(config.path, (err, data) => {
    if(!err && data.length) {
      callback(null, data.map(e => e.replace('.txt', '')))
    } else {
      callback(err)
    }
  })

};