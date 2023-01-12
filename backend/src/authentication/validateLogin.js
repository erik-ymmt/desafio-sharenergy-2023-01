const bcrypt = require('bcrypt');

const validateLogin = (typedPassword, dbPassword) => {
  console.log('typedPassword', typedPassword);
  console.log('dbPassword', dbPassword);
  const passwordVerification = bcrypt.compareSync(typedPassword, dbPassword);
  if (!passwordVerification) return { message: 'Invalid credentials!', authorized: false };
  return { message: 'Authorized.', authorized: true };
  // if (typedPassword === dbPassword) return { message: 'Authorized.', authorized: true };
};

module.exports = { validateLogin };
