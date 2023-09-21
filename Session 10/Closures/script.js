//function returning function
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

//Declare instances of function
const firstCounter = counter();
const secondCounter = counter();

//Declare arrays
const firstValues = [];
const secondValues = [];

//Populate arrays
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log(firstValues);
console.log(secondValues);
