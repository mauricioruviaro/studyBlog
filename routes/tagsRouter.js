const { Router } = require('express');
const { testRoute } = require('../controllers/tagController.js');
const Tags = Router();

Tags.get('/', testRoute);

module.exports = Tags;
