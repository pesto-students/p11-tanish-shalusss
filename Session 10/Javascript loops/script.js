function drawTriangle(triangleSize) {

   // Your solution goes here
   //first loop
   for(let i = 0; i < triangleSize; i++) {
       asterisks = '';
       //second loop
       for(let j = 0; j <= i; j++) {
         asterisks += '*';
      }
      console.log(asterisks);
   }
}

drawTriangle(4);