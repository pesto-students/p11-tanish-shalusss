function longestConseqSubseq(array) {
    let Set1 = new Set();
    let result = 0;
 
    // Store elements in Set
    for (let i = 0; i < array.length; i++)
        Set1.add(array[i]);
 
    // check each possible sequence from
    // the start then update optimal length
    for (let i = 0; i < array.length; i++)
    {
        // Check if current element is the starting
        // element of a sequence
        if (!Set1.has(array[i] - 1))
        {
         
            // Check for next elements in the sequence
            let j = array[i];
            while (Set1.has(j))
                j++;
 
            // update optimal length if
            // this length is more
            result = Math.max(result, j - array[i]);
        }
    }
    return result;
}
 
console.log(longestConseqSubseq([100, 4, 200, 1, 3, 2])); //Test Case 1 Output -4
console.log(longestConseqSubseq([10, 5, 7, 3, 4, 8, 9])); //Test Case 2 Output -4

//Time Complexity- O(N)
//Space Complexity- O(N)
    
    
