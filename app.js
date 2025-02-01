// import express
const express = require('express');
// create an express app
const app = express();
// import the logger middleware
const logger = require('./middlewares/logger');

// use the logger middleware
app.use(logger);

// export the app
module.exports = app;