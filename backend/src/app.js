const express = require('express');
const cors = require('cors');
const router = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/clients', router.clients);
app.use('/users', router.users);

module.exports = app;
