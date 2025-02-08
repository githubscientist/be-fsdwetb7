const Post = require('../models/post');

const postController = {
    createPost: async (req, res) => {
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
    },
    getPosts: async (req, res) => {
        try {
            // get all the posts from the database
            const posts = await Post.find().select('-__v');

            // send a response
            res.status(200).json({ posts });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getPost: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatePost: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletePost: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = postController;