function intersection(a, b) {
    let result = [];
    for(let i=0; i<a.length; i++) {
        for(let j=0; j<b.length; j++) {
        if(a[i] == b[j]) {
            result.push(a[i]);
        }
     }
    }
    
    
    return result;
}

console.log(intersection([1,2,3,4,5], [4,5,6,7,8])); //Test Case 1
console.log(intersection([1,2,3,4,5], [5,4,3,2,1])); //Test Case 2