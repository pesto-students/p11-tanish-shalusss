function divideArray(nums) {
    let evenNums = [];
    let oddNums = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 == 0) {
        evenNums.push(nums[i]); // evenNums array
      } else {
        oddNums.push(nums[i]); // oddNums array
      }
    }
  
    // Sort arrays
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
  
    // Output array values to the console
    if(evenNums.length==0){
        console.log("Even Numbers: None")
    }else {
        console.log("Even Numbers:", evenNums);
    }   
    
    if(oddNums.length==0){
        console.log("Odd Numbers: None")
    }else {
        console.log("Odd Numbers:", oddNums);
    }
    
  }
  
const nums = [5, 1, 9, 3];
divideArray(nums);
