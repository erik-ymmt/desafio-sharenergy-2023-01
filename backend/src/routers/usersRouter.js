const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.users.login);

module.exports = router;
