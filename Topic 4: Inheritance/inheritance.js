class person {
  
  #name;
  #age;
  #status;
  
  constructor(name,age, occupation ){
    this.#name = name;
    this.#age = age;
    this.#status = status;
    
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
  
  displayInfo(){
    console.log(" Name: " + this.name);
    console.log(" Age: " + this.age);
    console.log(" Status: " + this.status)
  }
}