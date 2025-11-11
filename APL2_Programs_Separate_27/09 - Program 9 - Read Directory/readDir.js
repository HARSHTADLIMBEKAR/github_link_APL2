const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  files.forEach(f => console.log(f));
});
