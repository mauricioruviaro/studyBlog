const { Router } = require('express');
const AuthToken = require('../middlewares/AuthToken.js');
const { testRoute } = require('../controllers/userController.js');
const Users = Router();

Users.get('/', AuthToken, testRoute);

module.exports = Users;
