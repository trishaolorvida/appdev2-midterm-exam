const http = require('https');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url == '/') {
        const currentDateTime = new Date();
        const responseObject = {
            date: currentDateTime.toISOString()
        };
        res.writeHead(200);
        res.end(JSON.stringify(responseObject));
    }

    else if (req.url == '/hello') {
        res.writeHead(200);
        res.end('Hello, World!');
    }

    else {
        res.writeHead(404);
        res.end(JSON.stringify({error: 'Not Found'}));
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
  });