const { validateLogin } = require('../authentication/validateLogin');
const service = require('../services');

const findOne = async (req, res) => {
  const { username, password } = req.body;
  const userData = await service.users.findOne(username);
  const dbPassword = userData.password;
  const message = validateLogin(password, dbPassword);

  res.status(200).json(message);
};

module.exports = { findOne };
