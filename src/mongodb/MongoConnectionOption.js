class ConnectionOption{
  constructor(){
    this.uri = 'mongodb://127.0.0.1:27017'
    this.databaseName = "";
    this.collectionName = "";
  }
  getUri(){
    return this.uri;
  }
  setUri(x){
    x = (x||"mongodb://127.0.0.1:27017")
    this.uri = x;
    return this;
  }
  getDatabaseName(){
    return this.databaseName;
  }
  setDatabaseName(x){
    x = (x||"");
    this.databaseName = x;
    return this;
  }
  getCollectionName(){
    return this.collectionName;
  }
  setCollectionName(x){
    x = (x||"");
    this.collectionName = x;
    return this;
  }
}

module.exports = ConnectionOption;