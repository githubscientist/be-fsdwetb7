const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Request made to: ${req.url}`);
    console.log(`Request method: ${req.method}`);

    if (req.url === '/') {
        if (req.method === 'GET') {
            res.end('GET: Root Route!');
        } else if (req.method === 'POST') {
            res.end('POST: Root Route!');
        } else if (req.method === 'PUT') {
            res.end('PUT: Root Route!');
        } else if (req.method === 'DELETE') {
            res.end('DELETE: Root Route!');
        } else {
            res.end('Method not allowed!');
        }
    } else if (req.url === '/users') {
        res.end('Users Route!');
    } else {
        res.end('Route not found!');
    }
});

server.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});