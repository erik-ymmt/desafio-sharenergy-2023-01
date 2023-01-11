const { connect } = require('mongoose');

const options = {
  user: process.env.MONGO_DATABASE,
  pass: process.env.MONGO_ROOT_PASSWORD,
  dbName: process.env.MONGO_DATABASE,
};

connect('mongodb://localhost:3002', options);
