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
  
  /*
  
  Getters: It's a method use to access the value properties in a controlled way.
  Return: It's use to return the specify value of a function.
  */
  
  get species (){
    return this.#species;
  }
  
  get type (){
    return this.#type;
  }
  
  get sound(){
    return this.#sound;
  }

  // Method to Display Animal Info in the console 
  DisplayAnimalInfo(){
    console.log("Species: " + this.species);
    console.log("Type: " + this.type);
    console.log("Sound: " + this.sound);
  }

  // Method to Display Animal Info in HTML
  DisplayAnimalInfo_Html(){
    const AnimalElement = document.getElementById('Info');
    AnimalElement.innerHTML = `
      <strong>Species:</strong> ${this.species}<br>
      <strong>Type:</strong> ${this.type}<br>
      <strong>Sound:</strong> ${this.sound}
    `;
  }
}

// Creating instances of the Animal class
const animalInfo1 = new Animal('Mammal', 'Cat', 'Meow');
const animalInfo2 = new Animal('Vertebrate', 'Crocodile', 'grunt');

// Call methods to display info
animalInfo1.DisplayAnimalInfo();
animalInfo2.DisplayAnimalInfo();
