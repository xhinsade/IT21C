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
  
}
