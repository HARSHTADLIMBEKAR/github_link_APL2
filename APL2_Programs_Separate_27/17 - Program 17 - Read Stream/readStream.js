const fs = require('fs');
const rs = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });
rs.on('data', chunk => console.log('chunk length:', chunk.length));
rs.on('end', () => console.log('Done'));
