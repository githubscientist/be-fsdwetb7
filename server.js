// import express
const express = require('express');

// create an express app
const app = express();

// import morgan
const morgan = require('morgan');

// import the logger middleware
// const logger = require('./middlewares/logger');

// use the logger middleware
// app.use(logger);

// use morgan middleware
app.use(morgan('dev'));

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

// listen for requests
app.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});