const os = require('os');
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('CPUs:', os.cpus().length);
console.log('Free mem:', os.freemem());
console.log('Home dir:', os.homedir());
