const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  cpf: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Client = model('Client', schema);

const find = async () => Client.find({});

const create = async (client) => {
  const {
    name, email, phoneNumber, address, cpf,
  } = client;
  Client.create(
    {
      name, email, phoneNumber, address, cpf,
    },
    (err) => {
      if (err) console.log(err);
    },
  );
};

module.exports = { Client, find, create };
