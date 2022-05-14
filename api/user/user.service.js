const UserModel = require('./user.model');

async function createUser(user) {
  const newUser = await new UserModel(user);
  return newUser.save();
}

async function getAllUser() {
  return UserModel.find();
}

async function getAllUserByEmail(email) {
  return UserModel.find({ email });
}

module.exports = {
  createUser,
  getAllUser,
  getAllUserByEmail,
};
