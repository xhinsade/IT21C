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

     // Method to display person information in the HTML
     displayInfoHTML() {
        const personElement = document.getElementById('PersonInfo');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Status:</strong> ${this.status}
        `;
    }
}
    // Creating an object (instance) of the Person class
    const PersonInfo = new Person('Xhinsade Riri', 20, 'Tired');

    // Calling methods
    PersonInfo.displayInfo();

