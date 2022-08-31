const { Router } = require('express');
const AuthToken = require('../middlewares/AuthToken.js');
const { userSignIn, userSignUp, userForgotPassword } = require('../controllers/userController.js');
const Users = Router();

Users.get('/signin', userSignIn);
Users.post('/signup', userSignUp);
Users.post('/forgotpassword', userForgotPassword);

module.exports = Users;
