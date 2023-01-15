const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.clients.create);
router.get('/', controller.clients.find);
router.put('/:id', controller.clients.updateOne);
router.delete('/:id', controller.clients.deleteOne);

module.exports = router;
