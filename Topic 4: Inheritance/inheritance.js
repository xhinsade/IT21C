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
  
  DisplayInfo_Html() {

  const personInfo = document.getElementById('PersonInfo');
  personInfo.innerHTML = `
    <strong> Name:</strong> ${this.name}<br>
    <strong>Age:</strong> ${this.age}<br>
    <strong>Status:</strong> ${this.status}
  `;
}
 
 class patient extends person {
   constructor(name, age, status, healthStatus) {
     super(name, age, status);
     this.healthStatus = healthStatus;
   }
   
   displayInfo(){
     super.displayInfo();
     console.log(" Health Status: " + this.healthStatus);
   }
   
   DisplayInfo_Html(){
     const personInfo  = document.getElementById('PersonInfo');
     personInfo.innerHTML += '<br> <strong>Major: </strong> $ {this.healthStatus}';
   }
 }
 
 
