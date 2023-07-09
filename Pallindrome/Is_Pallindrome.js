function is_Pallindrome(number) {
    let revnumber = 0;
    let temp = number;
    while(temp != 0) {
        
        revnumber = (revnumber*10)+(temp%10);
        temp = Math.trunc(temp/10);
    }
    if(revnumber == number) {
        return 'Pallindrome';
    }else {
        return 'not Pallindrome';
    }
    
}
    console.log(is_Pallindrome(12321)); // Test Case 1
    console.log(is_Pallindrome(12345)); // Test Case 2