const createFile = require('./createFile');

const fs = require('fs');



module.exports = {
  createFile: createFile(fs, config)
};