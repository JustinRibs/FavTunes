const express = require('express');
const usersRouter = express.Router();
const UserController = require('../controllers/userController');

// get User
usersRouter.get('/:user', UserController.getUser);

module.exports = usersRouter;
