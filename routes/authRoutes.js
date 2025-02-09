// import express
const express = require('express');
const { register, login, logout } = require('../controllers/authController');

// create a router
const authRouter = express.Router();

// set up the routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

// export the router
module.exports = authRouter;