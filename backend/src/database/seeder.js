const bcrypt = require('bcrypt');
const { find, create } = require('./models/UserODM');

const seedDb = async () => {
  const users = await find();

  bcrypt.genSalt(10, (_err, salt) => (
    bcrypt.hash('sh@r3n3rgy', salt, async (_error, hash) => {
      if (users.length === 0) await create('desafiosharenergy', hash);
    })
  ));
};

module.exports = { seedDb };
