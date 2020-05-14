/**
 * Write a function called sumZero wich acepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero 
 * or undefined if a pair does not exist.
 */

/**
 * Naive solution (works but it could be better) in this
 * example you have to iterate every element in the array n times
 * Time complexity O(N ^ 2), Space complexity O(1)
 */

function sumZeroV0(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
        }
    }
  }
}

/**
 * this code setas a pointer at echa extreme of the array, compares the first with the second,
 * if the result is greater than zero, the last pointer moves down to the secondPointerIndex-1 position,
 * if the pointer is lesser than zero, the first pointer moves up to the firstPointerIndex+1 position
 * and so on until a solution is found
 * Time complexity O(N), Space complexity O(1)
 */
 
function sumZero(arr) {
  // set the pointers
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if(sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
 }

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3)]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) // undefined
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined
