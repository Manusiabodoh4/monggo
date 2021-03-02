import Mongo from './conn';

export default function MongoBuilder(){
  this.uri = 'mongodb://127.0.0.1:27017'
  this.database = null
  this.collection = null
}

MongoBuilder.prototype.setUri = function(uri){
  this.uri = (uri||'mongodb://127.0.0.1:27017')
  return this;
}

MongoBuilder.prototype.setDatabase = function(database){
  this.database = (database||null)
  return this
}

MongoBuilder.prototype.setCollection = function(collection){
  this.collection = (collection||null)  
  return this;
}

MongoBuilder.prototype.build = function(){
  return new Mongo(
    this.uri,
    this.database,
    this.collection
  )
}