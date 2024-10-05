class person {
  
  #name;
  #age;
  #status;
  
  constructor(name,age, occupation ){
    this.#name = name;
    this.#age = age;
    this.#status = statue;
    
  }
  
  get name(){
    return this.#name;
  }
  
  get age(){
    return this.#age;
  }
  
  get status(){
    return this.#status;
  }
}