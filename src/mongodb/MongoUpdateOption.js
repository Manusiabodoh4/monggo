class MongoUpdateOption{
  #filter;
  #newData;
  constructor(){
    this.#filter = {};
    this.#newData = {};
  }
  getFitler(){
    return this.#filter;
  }
  setFilter(x){
    x = (x||{});
    this.#filter = x;
    return this;
  }
  getNewData(){
    return this.#newData;
  }
  setNewData(x){
    x = (x||{});
    this.#newData = x;
    return this;
  }
  isWorthObject(){  
    if(typeof this.#newData != 'object' && typeof this.#filter != 'object') return false;
    const lengthKeysObject = Object.keys(this.#newData).length + Object.keys(this.#filter).length;
    if(lengthKeysObject == 0) return false;
    return true;
  }
}

module.exports = MongoUpdateOption;