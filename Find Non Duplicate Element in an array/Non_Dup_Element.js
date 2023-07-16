function nonDupElement(array) {
    let freqMap = new Map();
    for(let i = 0; i < array.length; i++) {
        if (freqMap.has(array[i]) ) {
            freqMap.set(array[i], freqMap.get(array[i]) + 1);
        }else {
            freqMap.set(array[i], 1);
        }
    }

    for(let j = 0; j < array.length; j++) {
        if(freqMap.get(array[j]) == 1) {
            return array[j];
        }

    }
}

console.log(nonDupElement([5, 2, 3, 2, 5]));      //Test Case 1
console.log(nonDupElement([-1, -1, -2, -2, -3])); //Test Case 2