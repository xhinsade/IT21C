//OBJECT INPUT
class Person {
  
  #name;
  #age;
  #status;
  
  constructor(name, age, status) {  
    this.#name = name;
    this.#age = age;
    this.#status = status;
  }
  
//GETTERS

  get name() {
    return this.#name;
  }
  
  get age() {
    return this.#age;
  }
  
  get status() {
    return this.#status;
  }
  
  //METHODS TO DISPLAY INFO
  displayInfo() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Status: " + this.status);
  }
  
  //METHODS TO DISPLAY INFO via HTML
  DisplayInfo_Html() {
    const personInfo = document.getElementById('PersonInfo');
    personInfo.innerHTML = `
      <strong>Name:</strong> ${this.name}<br>
      <strong>Age:</strong> ${this.age}<br>
      <strong>Status:</strong> ${this.status}
    `;
  }
}
/*
The extends keyword is used to create a subclass (child class) that inherits from another class (parent class).
*/

/*
The super keyword is used to call the constructor of the parent class, allowing the child class to inherit and initialize the parent’s properties.
*/

class Patient extends Person {
  constructor(name, age, status, healthStatus) {
    super(name, age, status); 
    this.healthStatus = healthStatus;
  }
  
  displayInfo() {
    super.displayInfo();
    console.log("Health Status: " + this.healthStatus);
  }
  
  DisplayInfo_Html() {
    const personInfo = document.getElementById('PersonInfo');
    personInfo.innerHTML += `
      <br> <strong>Health Status:</strong> ${this.healthStatus}
    `;
  }
}

// Create an instance of Patient instead of Person
const patient1 = new Patient('Xhinsade Riri', '20', 'Student', 'Healthy');

// Display info in console
patient1.displayInfo();
