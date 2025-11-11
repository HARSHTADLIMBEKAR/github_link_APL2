const fs = require('fs');
fs.writeFile('output.txt', 'Hello FS write!', (err) => {
  if (err) throw err;
  console.log('Written to output.txt');
});
