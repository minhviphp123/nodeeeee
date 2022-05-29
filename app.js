const _ = require('lodash');//handle data type

const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);//[1,2,3,4]

console.log(newItems);