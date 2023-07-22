function key(array, oldKey, newKey) {
    let newArray = [];
    for(let i = 0; i<array.length; i++) {
        if(array[i] == oldKey) {
            array[i] = newKey;
        }
    }
    return array;
}

console.log(key([1,2,3,2,4,2,5], 2, 6)); // Test Case 1
console.log(key([5,5,5,5], 5, 2));       // Test Case 2