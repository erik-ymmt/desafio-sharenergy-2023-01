const express = require('express');
const controller = require('../controllers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', controller.clients.find);
router.use(validateToken);
router.post('/', controller.clients.create);
router.put('/:id', controller.clients.updateOne);
router.delete('/:id', controller.clients.deleteOne);

module.exports = router;
