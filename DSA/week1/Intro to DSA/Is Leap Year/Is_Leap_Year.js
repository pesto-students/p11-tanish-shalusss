function leapYear(year) {
    if(year%4 == 0 && year%100 != 0) {
        return 'leap year';
    }else if(year%400 == 0){
        return 'leap year';
    }else {
        return 'not a leap year';
    }

}

console.log(leapYear(2000));
console.log(leapYear(1900));