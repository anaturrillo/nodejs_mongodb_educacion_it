const hola = require('./templates/saludo')
const chau = require('./templates/chau')

const router = {};

router.get = {};

router.get.hola = hola;
router.get.chau = chau;

router.post = {};
router.post.hola = 'algo';
router.post.chau = 'otra cosa';

module.exports = router;