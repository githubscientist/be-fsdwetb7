const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const sendMail = require("../utils/sendMail");
require('dotenv').config();

const authController = {
    register: async (req, res) => {
        try {
            // get the details of the user from the request body
            const { name, email, password } = req.body;

            // check if the user already exists
            const user = await User.findOne({ email });

            // if the user exists, return an error
            if (user) {
                return res.status(400).json({ message: "User already exists" });
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({ name, email, password: hashedPassword });

            // save the user to the database
            await newUser.save();

            // send a welcome email
            // sendMail(email, "Welcome to Socify!!", "Welcome to Socify!! We are glad to have you on board.");

            // return a success message
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            // get the details of the user from the request body
            const { email, password } = req.body;

            // check if the user exists
            const user = await User.findOne({ email });

            // if the user does not exist, return an error
            if (!user) {
                return res.status(400).json({ message: "User does not exist" });
            }

            // check if the password is correct
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            // if the password is incorrect, return an error
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // generate a token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

            // set the token in a cookie
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600000 });

            // return a success message
            res.status(200).json({ message: "User logged in successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    logout: async (req, res) => {
        try {
            // clear the token from the cookie
            res.clearCookie('token');

            // return a success message
            res.status(200).json({ message: "User logged out successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    me: async (req, res) => {
        try {
            // get the user ID from the request object
            const userId = req.userId;

            // get the user details
            const user = await User.findById(userId).select('-password -__v');

            // return the user details
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = authController;