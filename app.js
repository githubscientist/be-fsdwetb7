const express = require('express');
const postsRouter = require('./routes/postRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// parse the request body
app.use(express.json());

// parse cookies
app.use(cookieParser());

app.use('/posts', postsRouter);
app.use('/auth', authRouter);

module.exports = app;