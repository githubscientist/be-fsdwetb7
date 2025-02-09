const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middlewares/auth');

// create a new router
const postsRouter = express.Router();

postsRouter.post('/', auth.isAuthenticated, createPost);
postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

module.exports = postsRouter;