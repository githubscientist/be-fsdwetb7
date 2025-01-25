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

module.exports = logger;