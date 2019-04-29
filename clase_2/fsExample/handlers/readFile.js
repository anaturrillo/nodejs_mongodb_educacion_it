const fs = require('fs');
const config = require('../config');

const readFile = callback => {
  fs.readFile(`${config.path}/file.txt`, 'utf-8', (err, data) => {
    if(!err) {
      callback(null, data)
    } else {
      callback(err)
    }
  })
};

module.exports = readFile;