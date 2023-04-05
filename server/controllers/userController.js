const User = require('../database/UserModel');

const UserController = {};

UserController.getUser = (req, res, next) => {
  const { user } = req.params;
  console.log(user);
};

module.exports = UserController;
