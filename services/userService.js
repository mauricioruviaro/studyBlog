require('dotenv').config();
const userModel = require('../models/User');
const ResetUserPassword = require('../models/ResetUserPassword');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const REGEXUSERNAME = /^[A-Za-z]+$/;
const REGEXEMAIL = /\S+@\S+\.\S+/;
const SECRET = process.env.JWT_SECRET;
const ROUNDS = 12;
const JWTCONFIG = {
  expiresIn: process.env.JWT_EXPIRES_IN,
  algorithm: process.env.JWT_ALGORITHM,
};

const signIn = async (email, password) => {
  if (!validateEmail(email)) return { error: 'Invalid fields', status: 400 };

  const user = await emailExistsInDatabase(email);

  if (!user) return { error: 'User not found', status: 404 };

  if (!await validatePassword(password, user.password)) return { error: 'Invalid fields', status: 401 };

  const token = makeToken(user.id, JWTCONFIG);

  return { token, error: null, status: 200 };
}

const validateEmail = (email) => email.match(REGEXEMAIL);

const emailExistsInDatabase = async (loginEmail) => await userModel.findOne({ where: { email: loginEmail } });

const validatePassword = async (password, databasePassword) => await bcrypt.compare(password, databasePassword);

const makeToken = (userId, config) => jwt.sign({ userId }, SECRET, config);

const signUp = async (username, email, password) => {
  if (!validateEmail(email)) return { error: 'Invalid e-mail', status: 400 }
  if (!checkLengthPassword(password)) return { error: 'Password must be have more than 7 characters', status: 401 }
  if (!validateUsername(username)) return { error: 'Invalid username', status: 401 }

  if (await emailExistsInDatabase(email)) return { error: 'E-mail already exists', status: 401 }
  if (await usernameExistsInDatabase(username)) return { error: 'Username already exists', status: 401 }

  const hashedPassword = await makePasswordHash(password);

  const newUser = await userModel.create({
    username,
    password: hashedPassword,
    email,
  });

  const token = makeToken(newUser.id, JWTCONFIG);

  return { token, error: null, status: 201 }
}

const checkLengthPassword = (password) => password.length > 7;

const validateUsername = (username) => username.match(REGEXUSERNAME);

const usernameExistsInDatabase = async (loginUsername) => await userModel.findOne({ where: { username: loginUsername } });

const makePasswordHash = async (password) => bcrypt.hash(password, ROUNDS);

const forgotPassword = async (email) => {
  if (!validateEmail(email)) return { error: 'Invalid e-mail', status: 400 }

  const user = await emailExistsInDatabase(email);
  
  if (!user) return { error: 'User not found', status: 404 }

  const expiresInOneHourConfig = {
    expiresIn: '1h',
    algorithm: process.env.JWT_ALGORITHM,
  }

  const token = makeToken(user.id, expiresInOneHourConfig);

  const existsForgotRequest = await existsRequestToChangePassword(user.id);

  if (existsForgotRequest) {
    await ResetUserPassword.update({
      token,
    }, {
      where: { userId: user.id },
    });
  } else {
    await ResetUserPassword.create({
      userId: user.id,
      token,
    });
  }

  return { message: 'E-mail has been sended.', status: 201, error: null }
};

const existsRequestToChangePassword = async (userId) => await ResetUserPassword.findOne({ where: { userId } });

module.exports = {
  signIn,
  signUp,
  forgotPassword,
}
