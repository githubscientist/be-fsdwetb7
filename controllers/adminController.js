const User = require('../models/user');

const adminController = {
    createUser: async (req, res) => {
        try {
            res.status(200).json({ message: 'Route: Create User' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUsers: async (req, res) => {
        try {
            // Get all users from the database
            const users = await User.find();

            // Send the response
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUser: async (req, res) => {
        try {
            res.status(200).json({ message: 'Route: Get User' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            res.status(200).json({ message: 'Route: Update User' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            res.status(200).json({ message: 'Route: Delete User' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = adminController;