// Inheritance
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        return `Driving ${this.make} ${this.model}.\n`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numseats) {
        super(make, model, year, color);
        this.numseats = numseats;
    }
}

class RideShareCar extends Car {
    constructor(make, model, year, color, numseats, isAvailable) {
        super(make, model, year, color, numseats);
        this.isAvailable = isAvailable;
    } 
}

const ride = new RideShareCar('Audi', 'r8');
console.log(ride.drive());

//Polymorphism
class Shape {
    constructor() {
    }
    calculateArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return `Area of rectangle is ${this.width * this.height}.`
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return `Area of triangle is ${(this.base * this.height)/2}.`
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return `Area of circle is ${Math.PI * this.radius * this.radius}.\n`
    }
}

const AreaRec = new Rectangle(4, 2);
const AreaTri = new Triangle(4, 5);
const AreaCirc = new Circle(2);

console.log(AreaRec.calculateArea());
console.log(AreaTri.calculateArea());
console.log(AreaCirc.calculateArea());

//Abstraction and Encapsulation
class BankAccount {
    #accountNumber;
    balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.balance = balance;
        this.#accountHolderName = accountHolderName;
    }
    getBalance(type) {
        return console.log(`Current balance for ${type} is ${this.balance}`);
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
    deposit(amount) {
        return console.log(`\n ${this.balance += amount} amount deposited to checking account`);
    }
    withdraw(amount) {
        return console.log(`${this.balance -= amount} amount withdrawn from checking account`);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
    deposit(amount) {
        return console.log(`\n ${this.balance += amount} amount deposited to savings account`);
    }
    withdraw(amount) {
        const oldbalance = this.balance;
        if((this.balance - amount) < 0) {
            console.log(`Widthdrwal failed balance cannot be below 0, current balance is ${oldbalance}`);
            this.balance = oldbalance;
        }
        else {
            console.log(`${this.balance -= amount} amount withdrawn from savings account`);
        }
    }
}

const checkAccnt = new CheckingAccount(123, 3000, 'Shalini');
const saveAccnt = new SavingsAccount(12345, 4000, 'Sumeet');

//Checking account details
checkAccnt.deposit(5000);
checkAccnt.withdraw(5000);
checkAccnt.getBalance('Checking account');

//Savings account details
saveAccnt.deposit(5000);
saveAccnt.withdraw(9000);  
saveAccnt.getBalance('Savings account');
