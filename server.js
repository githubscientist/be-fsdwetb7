// import express
const express = require('express');

// create an express app
const app = express();

// a middleware function to log all requests
const logger = (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Body: ${req.body}`);
    console.log(`------------------------`);

    // call the next middleware function in the stack or
    // pass the request to the next middleware function
    next();
}

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

// listen for requests
app.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});