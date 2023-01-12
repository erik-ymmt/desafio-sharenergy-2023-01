const { validateLogin } = require('../authentication/validateLogin');
const generateToken = require('../authentication/generateToken');
const service = require('../services');

const findOne = async (req, res) => {
  const { username, password } = req.body;
  const userData = await service.users.findOne(username);
  const dbPassword = userData.password;
  const message = validateLogin(password, dbPassword);
  const token = generateToken.create(username);

  res.status(200).json({ ...message, token });
};

module.exports = { findOne };
