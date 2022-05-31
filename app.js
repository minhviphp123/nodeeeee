const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})