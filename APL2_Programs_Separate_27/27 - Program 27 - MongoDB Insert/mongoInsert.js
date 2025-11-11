const mongoose = require('mongoose');
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/apl2demo');
  const User = mongoose.model('User', new mongoose.Schema({ name:String, email:String }));
  const docs = await User.insertMany([
    { name:'Harsh', email:'harsh@example.com' },
    { name:'Raj', email:'raj@example.com' }
  ]);
  console.log('Inserted:', docs.length);
  await mongoose.disconnect();
}
main().catch(console.error);
