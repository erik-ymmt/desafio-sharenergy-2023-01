const app = require('./app');
const { connectDb } = require('./database/connection');
const { seedDb } = require('./database/seeder');
require('dotenv').config();

const port = process.env.APP_PORT;

connectDb()
  .then(async () => {
    await seedDb();
    app.listen(port, () => console.log('Listening port:', port));
  }).catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    process.exit(0);
  });
