const express = require('express');
const cors = require('cors');
const router = require('./routers');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
