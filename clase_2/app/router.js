const createFile = require('./handlers/createFile');
const readFile = require('./handlers/readFile');
const updateFile = require('./handlers/updateFile');
const deleteFile = require('./handlers/deleteFile');

const router = {};

router.file = {};

router.file.get = readFile;
router.file.post = createFile;
router.file.put = updateFile;
router.file.delete = deleteFile;


module.exports = router;