function transpose(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
}
 
function arrayMap(array) {
    array = array[0].map(
        (col, i) => array.map(row => row[i]));
        return array;
}

console.log(arrayMap([[1, 2],[3, 4]]));            //Test Case1 
    
console.log(arrayMap([[1, 2, 3, 4],[5, 6, 7, 8]]));//Test Case2
    
    
