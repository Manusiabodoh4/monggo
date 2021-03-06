const MongoBuilder = require('./src/mongodb/MongoBuilder');

async function main(){
  const user = await (new MongoBuilder()).setDatabase("kotakjualan").setCollection("user").build();
  console.log(await user.findAll());
}

main();