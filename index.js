const MongoBuilder = require('./src/mongodb/MongoBuilder');

async function main(){
  const user = await (new MongoBuilder()).setDatabase("kotakjualan").setCollection("todo").build();
  console.log(await user.findAll());  
}

main();