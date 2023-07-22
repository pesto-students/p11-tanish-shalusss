function twoMatrixSum(matrix1,matrix2) {
    let sumMatrix = [[],[]];
    if(matrix1.length != matrix2.length) {
        return 'Arrays must have the same dimensions';
    }
    
    for(let i=0; i<matrix1.length; i++) {
        for(j=0; j<matrix1[i].length; j++) {
           
            sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j]; 
        }
        if(matrix1[i].length != matrix2[i].length) {
            return 'Arrays must have the same number of rows';
        }
    }
    return sumMatrix;
}

console.log(twoMatrixSum([[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]])); //Test Case 1
console.log(twoMatrixSum([[1,2],[3,4]],[[5,6],[7,8]]));            //Test Case 2