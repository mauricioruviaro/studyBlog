const { Router } = require('express');
const AuthToken = require('../middlewares/AuthToken.js');
const { userLogin } = require('../controllers/userController.js');
const Users = Router();

Users.get('/signin', userLogin);

module.exports = Users;
