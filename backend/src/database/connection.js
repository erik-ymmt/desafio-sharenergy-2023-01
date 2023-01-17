const { connect, set } = require('mongoose');
require('dotenv').config();

set('strictQuery', false);
const connectDb = (url = process.env.MONGO_URI) => connect(url)
  .then(() => console.log('MongoDb connection ok!'))
  .catch((e) => console.log('connection error >>', e));

module.exports = { connectDb };
