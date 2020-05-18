/**
 * Given a sorted array of integers, write a function
 * called search, that accepts a value and returns the index
 * where the value passed to the function is 
 * located. if the value is not found return -1.
 */

/**
 * Procedures:
 * 1. Take the number at the center of the array
 * 2. Check if the number greater or lesser than the number found in 1, 
 *    observe the sub array where it should be.
 * 3. Take the subarray from 2. and repeat

 */

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    }
    else if (arr[middle] > val) {
      max = middle - 1;
    }
    else {
      console.log(`Index of ${val} is ${middle}`);
      return middle;
    }
  }
  console.log(-1);
  return -1;
}

search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1
