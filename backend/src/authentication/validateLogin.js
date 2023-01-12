const validateLogin = (typedPassword, dbPassword) => {
  // const passwordVerification = bcrypt.compareSync(password, passwordDB);
  // if (!passwordVerification) { return 'Incorrect email or password'; }
  console.log('typedPassword', typedPassword);
  console.log('dbPassword', dbPassword);

  if (typedPassword === dbPassword) return { message: 'Authorized.', authorized: true };
  return { message: 'Invalid credentials!', authorized: false };
};

module.exports = { validateLogin };
