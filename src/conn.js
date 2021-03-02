import MongoDB from 'mongodb';

export default function Mongo(uri, database, collection){
  this.uri = (uri||'mongodb://127.0.0.1:27017')
  this.database = (database||null)
  this.collection = (collection||null)  

  this.connection = null;
  this.connectionDatabase = null;
  this.connectionCollection = null;
}


Mongo.prototype.setUri = function(uri){
  this.uri = (uri||'127.0.0.1:27017')
}

Mongo.prototype.setDatabase = function(database){
  this.database = (database||null)
}

Mongo.prototype.setCollection = function(collection){
  this.collection = (collection||null)  
}

Mongo.prototype.getUri = function(){
  return this.uri;
}

Mongo.prototype.getDatabase = function(){
  return this.database;
}

Mongo.prototype.getCollection = function(){
  return this.collection;
}

Mongo.prototype.getConnection = function(){
  return this.connection;
}

Mongo.prototype.getConnectionDatabase = function(){
  return this.connectionDatabase;
}

Mongo.prototype.getConnectionCollection = function(){
  return this.connectionCollection;
}

Mongo.prototype.createConnection = async function(){
  this.connection = await MongoDB.connect(this.uri, {useNewUrlParser:true, useUnifiedTopology:true});
  return this;
}

Mongo.prototype.createConnectionDatabase = function(){  
  this.connectionDatabase = this.connection?.db(this.database);
  return this;
}

Mongo.prototype.createConnectionCollection = function(){  
  this.connectionCollection = this.connectionDatabase?.collection(this.collection);   
  return this;
}

