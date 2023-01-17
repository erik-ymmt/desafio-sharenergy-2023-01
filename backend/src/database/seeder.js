const bcrypt = require('bcrypt');
const Users = require('./models/UserODM');
const { Client } = require('./models/ClientODM');

const seedDb = async () => {
  const users = await Users.find();

  bcrypt.genSalt(10, (_err, salt) => (
    bcrypt.hash('sh@r3n3rgy', salt, async (_error, hash) => {
      if (users.length === 0) await Users.create('desafiosharenergy', hash);
    })
  ));

  const clients = await Client.find({});
  if (clients.length === 0) {
    await Client.create({
      name: 'Beatriz Silva',
      email: 'bia@email.com',
      phoneNumber: '99998888',
      address: 'rua da padaria, 100',
      cpf: '123.012.301-23',
    });
  }
};

module.exports = { seedDb };
