const { find, create } = require('./models/UserODM');

const seedDb = async () => {
  const users = await find();
  if (users.length === 0) await create('desafiosharenergy', 'sh@r3n3rgy');
};

module.exports = { seedDb };
