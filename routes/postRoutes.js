const express = require('express');

// create a new router
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.json({ message: 'Posts World!!' });
});

module.exports = postsRouter;