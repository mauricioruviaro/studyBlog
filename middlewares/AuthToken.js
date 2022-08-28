const auth = (_req, _res, next) => {
  console.log('validate token');
  next();
};

module.exports = auth;
