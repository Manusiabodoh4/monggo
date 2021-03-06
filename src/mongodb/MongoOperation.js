const {MongoConnection} = require('./MongoConnection');
const FindOption = require('./MongoFind');

class MongoOperation extends MongoConnection{  
  constructor(){super();}    
  async find(param = new FindOption()){
    try {
      return await this.getCollection()
      .find(param.getFilter(), param.getProjection())      
      .limit(param.getLimit())
      .sort(param.getSort())
      .toArray();  
    } catch (error) {
      console.error(error);
      return;  
    }
  }
  async findOne(param = new FindOption()){
    try {
      return await this.getCollection()
      .findOne(param.getFilter(), param.getProjection());
    } catch (error) {
      console.error(error);
      return;
    }
  }
  async findRange(param = new FindOption()){
    try {
      return await this.getCollection()
      .find(param.getFilter(), param.getProjection())
      .skip(param.getSkip())
      .limit(param.getLimit())
      .sort(param.getSort())
      .toArray();  
    } catch (error) {
      console.error(error);
      return;
    }
  }
  async findPage(param = new FindOption(), page = 1){
    if(page <= 0) return;    
    try { 
      return await this.getCollection()
      .find(param.getFilter(), param.getProjection())
      .skip((param.getLimit()*(page - 1)))
      .limit(param.getLimit())
      .sort(param.getSort())
      .toArray();  
    } catch (error) {
      console.error(error);
      return;
    }
  }
  async findAll(param = new FindOption()){
    try {
      return await this.getCollection()
      .find(param.getFilter(), param.getProjection())      
      .sort(param.getSort())
      .toArray();  
    } catch (error) {
      console.error(error);
      return;  
    }
  }
}

module.exports = MongoOperation;
