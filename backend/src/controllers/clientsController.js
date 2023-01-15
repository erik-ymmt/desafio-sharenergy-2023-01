const service = require('../services');

const create = async (req, res) => {
  const client = req.body;
  const result = await service.clients.create(client);
  res.status(201).json(result);
};

const find = async (req, res) => {
  const result = await service.clients.find();
  res.status(200).json(result);
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  const client = req.body;
  const result = await service.clients.updateOne(id, client);
  res.status(201).json(result);
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  const result = await service.clients.deleteOne(id);
  res.status(200).json(result);
};

module.exports = {
  create, find, updateOne, deleteOne,
};
