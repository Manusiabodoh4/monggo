const Mongo = require('./src/mongodb/init');

async function main(){
  const user = await (new Mongo()).setCollection("todo").setDatabase("kotakjualan").build();  
  console.log(Buffer.from(JSON.stringify(await user.find()), "utf8"));
}

main();
