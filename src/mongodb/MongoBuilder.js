const ConnectionOption = require('./MongoConnectionOption');
const MongoOperation = require('./MongoOperation');

class MongoBuilder{
  constructor(){    
    this.connectionOption = new ConnectionOption();
  }    
  setUri(x){
    this.connectionOption.setUri(x);
    return this;
  }
  setDatabase(x){
    this.connectionOption.setDatabaseName(x);
    return this;
  }
  setCollection(x){
    this.connectionOption.setCollectionName(x);
    return this;
  }
  async build(){    
    return await (new MongoOperation())
    .createConnection(this.connectionOption);
  }
}

module.exports = MongoBuilder;