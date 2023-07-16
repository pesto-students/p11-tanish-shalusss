function sumPairs(array, S) {
    let pairarray = [];
    let array1 =[];
    for(let i = 0; i < array.length-1; i++) {
        for(j = i+1; j < array.length; j++) {
          if (S - array[i] == array[j]) {
              pairarray.push([array[i],array[j]]);
              }
        }
    }
    
    return pairarray;
}

console.log(sumPairs([2,4,6,8,10], 12)); // Test Case 1
console.log(sumPairs([1,1,1,1,1], 2));   // Test Case 2