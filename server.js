// import the app
const app = require('./app');

// listen for requests
app.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});