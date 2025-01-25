// import express
const express = require('express');
// create an express app
const app = express();
// import the logger middleware
const logger = require('./middlewares/logger');
// import the test router
const testRouter = require('./routes/testRoutes');

// use the logger middleware
app.use(logger);
app.use('/api/v1/test', testRouter);

// export the app
module.exports = app;