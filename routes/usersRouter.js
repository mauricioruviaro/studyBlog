const { Router } = require('express');
const AuthToken = require('../middlewares/AuthToken.js');
const { userSignIn, userSignUp } = require('../controllers/userController.js');
const Users = Router();

Users.get('/signin', userSignIn);
Users.post('/signup', userSignUp);

module.exports = Users;
