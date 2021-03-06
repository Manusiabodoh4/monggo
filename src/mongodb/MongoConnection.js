const MongoDB = require('mongodb');

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

class MongoConnection{
  constructor(){
    this._connection = null;
    this._database   = null;
    this._collection = null;
  }
  getConnection(){
    return this._connection;
  }
  getDatabase(){
    return this._database;
  }
  getCollection(){
    return this._collection;
  }
  async createConnection(param = new ConnectionOption()){        
    try { this._connection = await MongoDB.connect(param.getUri(),{useNewUrlParser:true, useUnifiedTopology:true, poolSize:25}); } 
    catch (error) {
      console.error("Error in Connection");
    }    
    try {this._database = this._connection?.db(param.getDatabaseName());} 
    catch (error) {
      console.error("Database not found");
    }
    try {this._collection = this._database?.collection(param.getCollectionName());} 
    catch (error) {
      console.error("Collection not found");  
    }
    return this;
  }

}

module.exports = {
  MongoConnection,
  ConnectionOption
};