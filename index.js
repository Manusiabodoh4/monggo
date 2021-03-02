import MongoBuilder from './src/connBuilder'

const main = async () => {
  const obj = (new MongoBuilder()).setDatabase('kotakjualan').setCollection('user').build();
  const con = (await obj.createConnection()).createConnectionDatabase().createConnectionCollection().getConnectionCollection();
  console.log(await con.findOne());
}

main();

