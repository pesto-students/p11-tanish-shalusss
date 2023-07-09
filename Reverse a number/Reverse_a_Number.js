function reverseNumber(number) {
    let temp = number;
    let revnumber = 0;
    
    while(temp != 0) {
        revnumber = (revnumber*10) + (temp%10); 
        temp = Math.trunc(temp/10);
    }
    return revnumber;
}
console.log(reverseNumber(12345)); // Test Case 1
console.log(reverseNumber(100));   // Test Case 2

