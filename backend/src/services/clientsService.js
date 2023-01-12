// placeholder
const { User } = require('../database/models/UserODM');

const find = async () => {
  const result = await User.find();
  return result;
};

module.exports = { find };
