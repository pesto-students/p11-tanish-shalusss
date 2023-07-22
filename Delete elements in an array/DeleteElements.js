function checkInput(number) {
    
    if ((number%2 !=0) && (number%3 !=0)) {
        console.log(number);
        return number;
    }
}
const result = [1,2,3,4,5,6,7,8,9].filter(checkInput);// Test Case 1
console.log(result);

const result2 = [9,12,15,18,21].filter(checkInput);// Test Case 2
console.log(result2);