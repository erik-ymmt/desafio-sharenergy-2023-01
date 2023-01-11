const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = model('User', schema);

const find = async () => User.find({});

const create = async (username, password) => {
  User.create(
    { username, password },
    (err) => {
      if (err) console.log(err);
    },
  );
};

module.exports = { User, find, create };
