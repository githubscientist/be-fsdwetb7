const express = require('express');
const { createPost, getPosts, getPost, updatePost, deletePost } = require('../controllers/postController');

// create a new router
const postsRouter = express.Router();

postsRouter.post('/', createPost);
postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

module.exports = postsRouter;