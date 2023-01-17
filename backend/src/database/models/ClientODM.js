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

module.exports = { Client };
