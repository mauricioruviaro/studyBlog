const { validateEmail } = require('../services/userService.js');

const testRoute = async (_req, res) => {
  validateEmail('email.teste@email.com');

  res.status(200).json({ message: '/users' });
};

module.exports = {
  testRoute,
}
