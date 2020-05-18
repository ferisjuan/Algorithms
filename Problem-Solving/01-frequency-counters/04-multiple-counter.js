/**
 * Implement a function called areThereDuplicates wich acepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in. 
 * Must be Time (N), Space O(N)
 */

function areThereDuplicates() {
  const args = arguments;

  let freqCounter = {};

  for (const key in args) {
    const value = args[key];
    freqCounter[value] = (freqCounter[value] || 0) + 1;
  }

  for (const key in freqCounter) {
    if (freqCounter[key] > 1) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;

}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true


