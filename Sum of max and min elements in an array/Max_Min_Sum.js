function maxMinSum(array) {
    let maxNum = 0;
    let minNum = 0;
    for(let i=0; i<array.length; i++) {
        if(i == 0) {
            maxNum = array[0];
            minNum = array[0];
        }
        if(array[i] > maxNum) {
            maxNum = array[i];
        }
        if(array[i] < minNum) {
            minNum = array[i]
        }
    }
    return maxNum + minNum;
}
console.log(maxMinSum([5, 2, 9, 1, 7]));        //Test Case 1
console.log(maxMinSum([-10, 0, 100, -50, 20])); //Test Case 2