const bcrypt = require('bcrypt');

const validateLogin = (typedPassword, dbPassword) => {
  const passwordVerification = bcrypt.compareSync(typedPassword, dbPassword);
  if (!passwordVerification) return { message: 'Invalid credentials!', authorized: false };
  return { message: 'Authorized.', authorized: true };
};

module.exports = { validateLogin };
