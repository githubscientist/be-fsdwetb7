const express = require('express');

const testRouter = express.Router();

// request handlers
testRouter.get('/', (req, res) => {
    res.json({ message: 'Hello GET!' });
});

testRouter.post('/', (req, res) => {
    res.json({ message: 'Hello POST!' });
});

testRouter.put('/', (req, res) => {
    res.json({ message: 'Hello PUT!' });
});

testRouter.delete('/', (req, res) => {
    res.json({ message: 'Hello DELETE!' });
});

// export the router
module.exports = testRouter;