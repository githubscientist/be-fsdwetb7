// import express
const express = require('express');

// create an express app
const app = express();

// request handlers
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// listen for requests
app.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});