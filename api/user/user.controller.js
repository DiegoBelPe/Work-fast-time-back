const {
  createUser,
  getAllUser,
  getAllUserByEmail,
  loginUser,
} = require('./user.service');

async function handlerCreateUser(req, res) {
  const newUser = req.body;
  const user = await createUser(newUser);
  res.status(201).json(user);
}

async function handlerGetAllUser(req, res) {
  const users = await getAllUser.find();
  res.status(201).json(users);
}

async function handlerGetAllUserByEmail(req, res) {
  const { email } = req.body;
  const user = await getAllUserByEmail.find({ email });
  res.status(201).json(user);
}


module.exports = {
  handlerCreateUser,
  handlerGetAllUser,
  handlerGetAllUserByEmail,
};
