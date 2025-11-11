console.log('argv:', process.argv);
console.log('cwd:', process.cwd());
console.log('platform:', process.platform);
console.log('env SAMPLE=', process.env.SAMPLE);
process.on('exit', (code)=> console.log('Process exiting with code', code));
