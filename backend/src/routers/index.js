const express = require('express');
const clients = require('./clientsRouter');
const users = require('./usersRouter');

const router = express.Router();

router.use('/clients', clients);
router.use('/users', users);

module.exports = router;
