class MongoDeleteOption{
  #filter;
  constructor(){
    this.#filter = {};    
  }
  getFitler(){
    return this.#filter;
  }
  setFilter(x){
    x = (x||{});
    this.#filter = x;
    return this;
  }  
  isWorthObject(){  
    if(typeof this.#filter != 'object') return false;    
    if(Object.keys(this.#filter).length == 0) return false;
    return true;
  }
}

module.exports = MongoDeleteOption;