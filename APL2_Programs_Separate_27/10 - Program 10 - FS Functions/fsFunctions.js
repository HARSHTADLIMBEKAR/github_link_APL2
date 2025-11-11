const fs = require('fs');
console.log('package.json exists?', fs.existsSync('package.json'));
if(!fs.existsSync('tmp')) fs.mkdirSync('tmp');
fs.writeFileSync('tmp/info.txt', 'hello');
fs.appendFileSync('tmp/info.txt', '\nappended line');
const stats = fs.statSync('tmp/info.txt');
console.log('File size:', stats.size);
