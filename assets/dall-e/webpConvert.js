const fs = require('fs');
const exec = require('child_process').exec;

const fileList = fs.readdirSync(__dirname);
fileList.pop();
fileList.pop();
fileList.pop();

for(const file of fileList){
    const path = __dirname + '/' + file
    const output = path.replace('.png', '.webp')

    exec(`cwebp 100 "${path}" -o "${output}"`)

}