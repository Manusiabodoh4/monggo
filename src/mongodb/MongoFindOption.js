class FindOption{  
  #filter;
  #projection;
  #sort;
  #skip;
  #limit;
  constructor(){
    this.#filter = {};
    this.#projection = {};
    this.#sort = {};
    this.#skip = 0;
    this.#limit = 100;    
  }  
  getFilter(){
    return this.#filter;
  }
  setFilter(x){    
    x = (x||{});
    this.#filter = x;
    return this;
  }
  getProjection(){
    return this.#projection;
  }
  setProjection(x){
    x = (x||{});
    this.#projection = x;
    return this;
  }
  getSort(){
    return this.#sort;
  }
  setSort(x){
    x = (x||{});
    this.#sort = {};
    return this;
  }
  getSkip(){
    return this.#skip;
  }
  setSkip(x){
    x = (x||0);
    this.#skip = x;
    return this;
  }
  getLimit(){
    return this.#limit;
  }
  setLimit(x){
    x = (x||100);
    this.#limit = x;
    return this;
  }
}

module.exports = FindOption;