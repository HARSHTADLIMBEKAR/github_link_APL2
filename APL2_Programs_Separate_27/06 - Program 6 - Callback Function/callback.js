function fetchData(id, cb){
  setTimeout(() => cb(null, { id, value: Math.random() }), 500);
}
fetchData(1, (err, data) => {
  if(err) return console.error(err);
  console.log('Callback received:', data);
});
