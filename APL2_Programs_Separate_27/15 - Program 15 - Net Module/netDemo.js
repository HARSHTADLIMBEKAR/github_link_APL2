const net = require('net');

const server = net.createServer((socket)=>{
  socket.write('Welcome!');
  socket.on('data', d => console.log('Client says:', d.toString()));
});

server.listen(4000, () => {
  console.log('TCP server on 4000');
  server.getConnections((err, count)=> console.log('Connections:', count));
  console.log('Address:', server.address());
  setTimeout(()=> server.close(()=> console.log('Server closed')), 2000);
});
