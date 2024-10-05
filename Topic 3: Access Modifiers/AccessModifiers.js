class Animal {
  
  /*
  Private Fields: Use to encapsulate data and doesn't allow to access the class properties outside the class itself
  
  */
  
  #species;
  #type;
  #sound;
  
  constructor(species, type, sound){
    this.#species = species;
    this.#type = type;
    this.#sound = sound;
  }
  
  get species (){
    return this.#species;
  }
  
  get type (){
    return this.#type;
  }
  
  get sound(){
    return this.#sound;
  }
}
