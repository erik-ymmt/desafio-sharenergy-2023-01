const { User } = require('../database/models/UserODM');

const findOne = async (username) => {
  const result = await User.findOne({ username });
  return result;
};

module.exports = { findOne };
