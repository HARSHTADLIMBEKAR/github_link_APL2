const path = require('path');
console.log('basename:', path.basename('/a/b/c.txt'));
console.log('dirname:', path.dirname('/a/b/c.txt'));
console.log('extname:', path.extname('c.txt'));
console.log('join:', path.join('a','b','c.txt'));
console.log('resolve:', path.resolve('..','folder'));
