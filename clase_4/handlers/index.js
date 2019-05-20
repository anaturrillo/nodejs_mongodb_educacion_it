const createFile = require('./createFile');
const getFiles = require('./getFiles');
const getFile = require('./getFile');
const editFile = require('./updateFile');
const removeFile = require('./deleteFile');

module.exports = function (db) {
  return {
    create: createFile(db),
    /*getAll: getFiles(db),
    get: getFile(db),
    edit: editFile(db),
    remove: removeFile(db)*/
  }
};