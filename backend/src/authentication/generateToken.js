const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const create = (username) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const payload = { username };

  const token = jwt.sign(
    payload,
    secret,
    jwtConfig,
  );

  return token;
};

module.exports = { create };
