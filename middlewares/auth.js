const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = {
    // middleware to check if the user is authenticated
    isAuthenticated: async (req, res, next) => {
        // get the token from the authorization header
        const token = req.headers.authorization.split(' ')[1];

        // send an error if the token is not present
        if (!token) {
            return res.status(500).json({ message: 'Unauthorized' });
        }

        // verify the token
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decoded.userId;
        } catch (error) {
            return res.status(500).json({ message: 'Unauthorized' });
        }

        next();
    }
}

module.exports = auth;