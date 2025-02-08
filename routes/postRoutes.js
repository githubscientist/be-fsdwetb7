const express = require('express');
const { createPost } = require('../controllers/postController');

// create a new router
const postsRouter = express.Router();

postsRouter.post('/', createPost);

module.exports = postsRouter;