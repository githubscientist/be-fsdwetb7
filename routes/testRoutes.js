const express = require('express');
const testController = require('../controllers/testController');

const testRouter = express.Router();

// request handlers
testRouter.get('/', testController.testGet);
testRouter.post('/', testController.testPost);
testRouter.put('/', testController.testPut);
testRouter.delete('/', testController.testDelete);

// export the router
module.exports = testRouter;