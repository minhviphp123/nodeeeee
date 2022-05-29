
const { readFileSync, writeFileSync } = require('fs');

readFileSync('./content/first.txt', 'utf8');

writeFileSync('./content/first.txt', 'Hello World!');