const express = require('express');
const postsRouter = require('./routes/postRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const adminRouter = require('./routes/adminRoutes');
const profileRouter = require('./routes/profileRoutes');

const app = express();

// serve static files
app.use('/uploads', express.static('uploads'));

// parse the request body
app.use(express.json());

// parse cookies
app.use(cookieParser());

app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/profile', profileRouter);

module.exports = app;