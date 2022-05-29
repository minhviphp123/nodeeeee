const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, res) => { //doc 2 file, check content
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/eus.txt', `${first} and ${second}`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
});
console.log('complete!!');