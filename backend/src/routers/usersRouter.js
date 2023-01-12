const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.users.findOne);

module.exports = router;
