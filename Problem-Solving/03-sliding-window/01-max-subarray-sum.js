/**
 * Write a function called maxSubarraySum wich accepts 
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements in the array
 */

/**
*  Naive solution
*/
function maxSubarraySumV0(arr, num) {// naive aproach, don't use it
  if (num > arr.length) {
    console.log(null)
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i+j]      
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log(max); 
} // Time O(n^2)

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  
  if (arr.length < num) {
    console.log(null)
    return null;
  };

  for (let i = 0; i < num; i++) {
    maxSum +=arr[i]    
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6], 4); // 13
maxSubarraySum([], 4); // null
