// import express
const express = require('express');

// create an express app
const app = express();

// import the logger middleware
const logger = require('./middlewares/logger');

// use the logger middleware
app.use(logger);

// request handlers
app.get('/', (req, res) => {
    res.json({ message: 'Hello GET!' });
});

app.post('/', (req, res) => {
    res.json({ message: 'Hello POST!' });
});

app.put('/', (req, res) => {
    res.json({ message: 'Hello PUT!' });
});

app.delete('/', (req, res) => {
    res.json({ message: 'Hello DELETE!' });
});

// export the app
module.exports = app;