const service = require('../services');

const find = async (req, res) => {
  const result = await service.clients.find();
  res.status(200).json(result);
};

module.exports = { find };
