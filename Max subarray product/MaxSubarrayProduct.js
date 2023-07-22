function maxSubarrayProduct(array) {
  
    let result = array[0];
 
    let max = result;
    let min = result;
 
    for (let i = 1; i < array.length; i++) {
        
        if (array[i] < 0) {
            [max, min] = [min, max];
        }
 
        max = Math.max(array[i], max * array[i]);
        min = Math.min(array[i], min * array[i]);
        
        result = Math.max(result, max);
    }
 
    return result;
}

const array = [5, 2, 3, -2, 4, 5];     //Test Case 1
console.log(maxSubarrayProduct(array));

const array2 = [4, -1, -2, -3, -4];   //Test Case 2
console.log(maxSubarrayProduct(array2));