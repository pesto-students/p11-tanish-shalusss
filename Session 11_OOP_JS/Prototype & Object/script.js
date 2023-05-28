// Protecting the object

const person = {
    name: 'Shalini',
    age: 29,
    email: 'shalusss1994@gmail.com',
    getAge() {
        return this.age;
    },
    setAge(newage) {
        this.age = newage;
    },
};
  
  console.log(person.age);
  
  //read only properties
  Object.defineProperty(person, 'name', {readable: true});
  Object.defineProperty(person, 'email', {readable: true});
  
  //write only property
  Object.defineProperty(person, 'age', {readable: false, value: 30});
  
  console.log(person.name);
  console.log(person.email);
  console.log(person.age);
  
//Javascript Prototype
class Vehicle {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
    getDetails() {
        return `Car ${this.make} ${this.model} ${this.year} `;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    getDetails() {
        return `Car ${this.make} ${this.model} ${this.year} ${this.numDoors}`;
    }
}

const Vehicle1 = new Vehicle('Audi', 'r8', 2007);
const Car1 = new Car('Audi', 'r8', 2007, 4);

console.log(Vehicle1.getDetails());
console.log(Car1.getDetails());

    

