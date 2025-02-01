const express = require('express');
const postsRouter = require('./routes/postRoutes');

const app = express();

app.use('/posts', postsRouter);

module.exports = app;