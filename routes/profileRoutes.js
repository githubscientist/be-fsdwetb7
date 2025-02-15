const express = require('express');
const { setProfilePicture } = require('../controllers/profileController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const profileRouter = express.Router();

profileRouter.put('/picture', auth.isAuthenticated, upload.single('profilePicture'), setProfilePicture);

module.exports = profileRouter;