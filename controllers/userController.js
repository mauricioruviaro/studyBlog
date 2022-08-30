const { signIn, signUp } = require('../services/userService.js');

const userSignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Empty fields'});

  try {
    const { token, error, status } = await signIn(email, password);

    if (error) return res.status(status).json({ message: error});

    res.status(status).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error. Please, try again later.' });
  }
};

const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ error: 'Empty fields' });

  try {
    const { token, error, status } = await signUp(username, email, password);

    if (error) return res.status(status).json({ error });

    res.status(status).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error. Please, try again later.' });
  }
};

module.exports = {
  userSignIn,
  userSignUp,
}
