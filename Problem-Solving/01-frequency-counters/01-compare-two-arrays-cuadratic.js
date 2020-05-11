/**
 * Write a function called same, wich accepts two arrays.
 * The function should return true if every value in the first array
 * has its corresponding value squared in the second array.
 * The frequency of values must be the same. 
 */

 // Solution without implementing the pattern

function sameOldVersion(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // O(N)
    let correctIndex = arr2.indexOf(arr1[i] ** 2)    
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); // O(N)
  }
  return true;
} // O(N^2)
 
console.log(sameOldVersion([1, 2, 3, 2], [9, 1, 4, 4]));


// Using the frequency counter pattern
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (const val of arr1) { // O(N)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) { // O(N)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
} // O(N)

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

