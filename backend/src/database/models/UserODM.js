const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = model('User', schema);

User.create(
  { username: 'desafiosharenergy', password: 'sh@r3n3rgy' },
  (err) => {
    if (err) console.log(err);
  },
);
