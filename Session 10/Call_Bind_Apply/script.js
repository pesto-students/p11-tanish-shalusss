class Calculator {
    //Define add method
    add(num1, num2) {
        return num1 + num2;
    }
    
    //Define subtract method
    subtract(num1, num2) {
        return num1 - num2;
    }
    
    //Define multiply method
    multiply(num1, num2) {
        return num1 * num2;
    }
    
    //Define divide method
    divide(num1, num2) {
        return num1/num2;
    }
}

//Extend calculator class
class ScientificCalculator extends Calculator {
    //Define square method
    square(num) {
        return num * num;
    }
    
    //Define cube method
    cube(num) {
        return num * num * num;
    }
    
    //Define power method
    power(num,exponent) {
        return Math.pow(num,exponent);
    }
}

//Create instance of ScientificCalculator class
const SciCal = new ScientificCalculator();

//Create instance of Calculator class
const Cal = new Calculator();

//Use call method 
console.log(Calculator.prototype.add.call(Cal, 10, 5));

//Use subtract method
console.log(Calculator.prototype.subtract.apply(Cal, [10, 5]));

//Use bind method
const multiplyByTwo = Calculator.prototype.multiply.bind(SciCal, 2);

//Use bind method
const powerOfThree = ScientificCalculator.prototype.power.bind(SciCal, 3);

console.log(multiplyByTwo(5));
console.log(powerOfThree(2));