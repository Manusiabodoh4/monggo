const Mongo = require('./src/mongodb/init');

async function main(){
  const user = await (new Mongo()).setCollection("todo").setDatabase("kotakjualan").build();  
  console.log(await user.find());
}

main();
