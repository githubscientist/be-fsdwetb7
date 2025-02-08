const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');

// create a new router
const postsRouter = express.Router();

postsRouter.post('/', createPost);
postsRouter.get('/', getPosts);

module.exports = postsRouter;