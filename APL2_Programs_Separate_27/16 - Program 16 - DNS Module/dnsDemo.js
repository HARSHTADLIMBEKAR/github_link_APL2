const dns = require('dns');
dns.lookup('example.com', (err, address) => console.log('lookup:', address));
dns.resolve4('google.com', (err, addresses) => console.log('resolve4:', addresses));
dns.reverse('8.8.8.8', (err, hostnames) => console.log('reverse:', hostnames));
