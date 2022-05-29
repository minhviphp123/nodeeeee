const http = require('http');

const server = http.createServer((req, res) => { //server co req, res
    if (req.url === '/') {
        res.end('Welcome to home page');
    }
    if (req.url === '/about') {
        res.end('about!');
    }
    res.end(
        `
            <h1>Opps!</h1>
            <p>we cant seem to find the page you are looking for!</p>
        `
    )
})

server.listen(5000); //port of server is 5000
