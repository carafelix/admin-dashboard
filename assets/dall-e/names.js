const fs = require('fs')

const fileList = fs.readdirSync(__dirname);
fileList.pop();

console.log(fileList);