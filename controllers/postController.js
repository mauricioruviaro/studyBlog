const testRoute = async (_req, res) => res.status(200).json({ message: '/posts'});

module.exports = {
  testRoute,
}
