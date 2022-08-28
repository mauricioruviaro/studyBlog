const { Router } = require('express');
const { testRoute } = require('../controllers/postController.js');
const Posts = Router();

Posts.get('/', testRoute);

module.exports = Posts;
