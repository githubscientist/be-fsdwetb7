// import express
const express = require('express');
const { register, login, logout, me } = require('../controllers/authController');
const auth = require('../middlewares/auth');

// create a router
const authRouter = express.Router();

// set up the routes
// public routes
authRouter.post('/register', register);
authRouter.post('/login', login);

// protected routes
authRouter.post('/logout', auth.isAuthenticated, logout);
authRouter.get('/me', auth.isAuthenticated, me);

// export the router
module.exports = authRouter;