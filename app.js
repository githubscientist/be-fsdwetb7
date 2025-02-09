const express = require('express');
const postsRouter = require('./routes/postRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

// parse the request body
app.use(express.json());

app.use('/posts', postsRouter);
app.use('/auth', authRouter);

module.exports = app;