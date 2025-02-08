const express = require('express');
const postsRouter = require('./routes/postRoutes');

const app = express();

// parse the request body
app.use(express.json());

app.use('/posts', postsRouter);

module.exports = app;