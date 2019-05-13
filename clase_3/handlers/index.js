const createFile = require('./createFile');
const getFiles = require('./getFiles');
const getFile = require('./getFile');
const editFile = require('./updateFile');
const removeFile = require('./deleteFile');

const fs = require('fs');
const config = require('../config');



module.exports = {
  createFile: createFile(fs, config),
  getFiles:getFiles(fs, config),
  getFile:getFile(fs, config),
  editFile:editFile,
  removeFile: removeFile
};