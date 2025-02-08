const express = require('express');
const Post = require('../models/post');

// create a new router
const postsRouter = express.Router();

postsRouter.post('/', async (req, res) => {
    try {
        // get the data from the request body
        const { title, content } = req.body;

        // create a new post
        const newPost = new Post({
            title,
            content
        });

        // save the post
        await newPost.save();

        // send a response
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = postsRouter;