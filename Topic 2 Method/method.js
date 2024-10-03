// Input

const person ={
    name:"Xhinsade Riri",
    age:20,
    status:" Tired"
}

//Process and Output
console.log("Name: "+person.name);
console.log("Age: "+person.age);
console.log("Status: "+person.status);
console.log("--------------------------------");

// Class definition
class Person {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Status: " + this.status);
    }
}

