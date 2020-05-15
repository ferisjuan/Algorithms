/**
 * Implement a function called countUniqueValues
 * wich acepts a sorted array and counts the
 * unique values in the array. There can be negative
 * numbers in the array but it will always be sorted.
 */

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let leftPointer = 0
  let rightPointer = leftPointer + 1;

  while (rightPointer < arr.length) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      leftPointer++; 
      arr[leftPointer] = arr[rightPointer];
    } 
      rightPointer++;    
  }

  return leftPointer + 1;
}
 
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
