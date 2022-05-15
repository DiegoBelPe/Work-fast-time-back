const UserModel = require('./user.model');

async function getAllUser() {
  return UserModel.find();
}
async function getUserById(id) {
  const user = await UserModel.findById(id);
  return user;
}
async function getAllUserByEmail(email) {
  const user = await UserModel.findOne({ email });
  return user;
}
async function createUser(user) {
  const newUser = await UserModel.create(user);
  return newUser;
}

async function updateUser(id, user) {
  const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}

async function deleteUser(id) {
  const deletedUser = await UserModel.findByIdAndDelete(id);
  return deletedUser;
}
async function findOneUser(query) {
  const user = await UserModel.findOne(query);
  return user;
}

module.exports = {
  createUser,
  getAllUser,
  getAllUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  findOneUser,
};
