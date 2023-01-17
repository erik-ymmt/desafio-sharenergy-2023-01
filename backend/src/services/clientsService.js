const { Client } = require('../database/models/ClientODM');

const create = async (client) => {
  const result = await Client.create(client);
  return result;
};

const find = async () => {
  const result = await Client.find({});
  return result;
};

const updateOne = async (_id, client) => {
  const result = await Client.findByIdAndUpdate({ _id }, client, { new: true });
  return result;
};

const deleteOne = async (_id) => {
  const result = await Client.deleteOne({ _id });
  return result;
};

module.exports = {
  create, find, updateOne, deleteOne,
};
