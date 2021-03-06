const {MongoConnection} = require('./MongoConnection');
const FindOption = require('./MongoFind');

class SaveOption{
  constructor(){

  }
}

class UpdateOption{
  constructor(){

  }
}

class DeleteOption{
  constructor(){

  }
}

class MongoOperation extends MongoConnection{  
  constructor(){super();}    
  async find(param = new FindOption()){
    this.getCollection().find().toArray();
  }
  async findOne(){

  }
  async findRange(){

  }
  async findPage(){

  }
  async findAll(){

  }
}

module.exports = {
  MongoOperation,
  FindOption,
  SaveOption,
  UpdateOption,
  DeleteOption
};
