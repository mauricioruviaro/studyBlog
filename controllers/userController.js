const { login } = require('../services/userService.js');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Empty fields'});

  try {
    const { token, error } = await login(email, password);

    if (error) return res.status(404).json({ message: error});

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error. Please, try again later.' });
  }
};

module.exports = {
  userLogin,
}
