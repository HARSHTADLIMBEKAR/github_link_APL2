const fs = require('fs');
const ws = fs.createWriteStream('streamOut.txt');
for(let i=1;i<=5;i++) ws.write(`Line ${i}\n`);
ws.end('EOF');
ws.on('finish', ()=> console.log('Written streamOut.txt'));
