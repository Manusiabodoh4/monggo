class MongoSaveOption{ 
  #data;
  #secure;  
  constructor(){
    this.#data = {};
    this.#secure = true;    
  }
  getData(){
    return this.#data;
  }
  setData(x){
    x = (x||{});
    this.#data = x;
    return this;
  }
  getSecure(){
    return this.#secure;
  }
  setSecure(x){
    x = (x||true);
    this.#secure = x;
    return this;
  }  
  isWorthObject(){  
    if(typeof this.#data != 'object') return false;
    
    let lengthKeysObject = 0;
    if(Array.isArray(this.#data)) lengthKeysObject = Object.keys(this.#data[0]).length;     
    else lengthKeysObject = Object.keys(this.#data).length;
    
    if(lengthKeysObject == 0) return false;
    return true;
  }
}

module.exports = MongoSaveOption;