require('dotenv').config();
const userModel = require('../models/User');
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

const validateEmail = (email) => email.match(REGEXEMAIL);

const validateUsername = (username) => username.match(REGEXUSERNAME);

const userExistsInDatabase = async (loginUsername) => await userModel.findOne({ where: { username: loginUsername } });

const emailExistsInDatabase = async (loginEmail) => await userModel.findOne({ where: { email: loginEmail } });

const makeToken = (id) => jwt.sign({ userId: id }, SECRET, JWTCONFIG);

const makePasswordHash = async (password) => bcrypt.hash(password, ROUNDS);

const validatePassword = async (password, databasePassword) => await bcrypt.compare(password, databasePassword);

const login = async (email, password) => {
  if (!validateEmail(email)) return { error: 'Invalid fields' };

  const user = await emailExistsInDatabase(email);

  if (!user) return { error: 'Invalid fields' };

  if (!await validatePassword(password, user.dataValues.password)) return { error: 'Invalid fields' };

  const token = makeToken(user.id);

  return { token, error: null };
}

module.exports = {
  login,
}
