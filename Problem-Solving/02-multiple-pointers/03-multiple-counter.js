/**
 * Implement a function called areThereDuplicates wich acepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in. 
 * Must be Time (N log N), Space O(1)
 */

function areThereDuplicates() {
  // Two pointers
  args = Array.from(arguments).sort((a, b) => a > b);

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      console.log(true);
      return true
    }
    start++
    next++
  }
  console.log(false);
  return false
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true


