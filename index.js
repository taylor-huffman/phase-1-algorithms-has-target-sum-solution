  // Solution #1
  // function hasTargetSum(array, target) {
  //   for (let i = 0; i < array.length; i++) {
  //     const complement = target - array[i];
  //     for (let j = i + 1; j < array.length; j++) {
  //       if (array[j] === complement) return true;
  //     }
  //   }
  //   return false;
  // }

  // Solution #2
  // function hasTargetSum(array, target) {
  //   const seenNumbers = {};
  //   for (const number of array) {
  //     const complement = target - number;
  //     if (seenNumbers[complement]) return true;
  //     seenNumbers[number] = true;
  //   }
  //   return false;
  // }
  
  // Solution #3
  function hasTargetSum(array, target) {
    const seenNumbers = new Set(); // initialize an empty Set
    for (const number of array) {
      const complement = target - number;
  
      // .has returns true if the Set includes the complement
      if (seenNumbers.has(complement)) return true;
  
      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
  }

/* 
  Write the Big O time complexity of your function here
  Solution #1 - 0(n²)
  Solution #2 = 0(n)
  Solution #3 = 0(n)
*/

/* 
  Add your pseudocode here
  Solution #1
  function takes in 2 arguments, an array of numbers and a target number
  loop through array to established number for first variable i
  declare const variable coplement and assign expression subtracting current current variable i from target number
  loop through array again to establish 2nd number for 2nd variable j
  if array item with first variable i = variable complement, return true
  else return false

  Solution #2
  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
  if so, return true
  save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  Solution #1
  The above function takes in 2 arguments - an array of numbers and a target number.
  The function loops through the array twice, establishing values for variables i,j and complement.
  The if statement checks to see if array[i] = complement
  If it does, it returns true.
  If it does not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 25, 15, -30, 35, 80], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([35, 25, 15, 10, 35, 45], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([30, 80, 10, 40, 50, 85], 100));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
