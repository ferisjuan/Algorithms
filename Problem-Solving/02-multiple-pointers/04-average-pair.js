/**
* Write a function called averagePair. GIven a sorted array of intergers,
* determine if there is a pair of values in the array where the average 
* of the pair equals the target average. There may be more than one pair 
* that matches the average target.
*/

function averagePair(arr, value) {
  if (arr.length === 0) {
    console.log(false);
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avrg = (arr[start] + arr[end]) / 2;
    if (avrg === value) {
      console.log(true);
      return true;
    } else if (avrg < value) {
      start++;
    } else {
      end--;
    }
  }

  console.log(false);
  return false;
}

// sample ouput
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) //true 
