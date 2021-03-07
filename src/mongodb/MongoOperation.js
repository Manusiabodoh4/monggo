const MongoConnection = require('./MongoConnection');
const FindOption = require('./MongoFindOption');
const SaveOption = require('./MongoSaveOption');

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
  async #handleSaveOneNoSecure(x){
    if(Array.isArray(x)) return false;
    try {await this.getCollection().insertOne(x);} 
    catch (error) {
      console.error(error)
      return false;
    }
    return true;
  }
  async #handleSaveOneSecure(x){
    if(Array.isArray(x)) return false;
    const findOption = new FindOption().setFilter(x).setProjection({_id:1});
    try {
      if(await this.findOne(findOption) != null){
        return false;
      }
      await this.getCollection().insertOne(x);
    } 
    catch (error) {
      console.error(error)
      return false;
    }
    return true;
  }
  async saveOne(param = new SaveOption()){        
    if(!param.isWorthObject()) return false;
    if(param.getSecure()){
      return await this.#handleSaveOneSecure(param.getData());
    }
    else{
      return await this.#handleSaveOneNoSecure(param.getData());
    }
  }
  async #handleSaveManyNoSecure(x){
    if(!Array.isArray(x)) return false;
    try {await this.getCollection().insertMany(x);} 
    catch (error) {
      console.error(error)
      return false;
    }
    return true;
  }
  async #handleSaveManySecure(x){
    if(!Array.isArray(x)) return false;
    const findOption = new FindOption().setFilter(x[0]).setProjection({_id:1});
    try {
      if(await this.findOne(findOption) != null){
        return false;
      }
      await this.getCollection().insertMany(x);
    } 
    catch (error) {
      console.error(error)
      return false;
    }
    return true;
  }
  async saveMany(param = new SaveOption()){        
    if(!param.isWorthObject()) return false;
    if(param.getSecure()){
      return await this.#handleSaveManySecure(param.getData());
    }
    else{
      return await this.#handleSaveManyNoSecure(param.getData());
    }
  }
}

module.exports = MongoOperation;
