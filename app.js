const http = require('http');
const { url } = require('inspector');
const { reset } = require('nodemon');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('You are at home page!');
    }

    if (req.url === '/about') {
        //BLOCKING CODE!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page');
    }

});

server.listen(5000, () => {
    console.log('Server is Listening in port 5000...')
})