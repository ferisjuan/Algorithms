/**
 * Write a function called sameFrequency. Given two positive
 * integers, find out two numbers have the same frequency of digits.
 * 
 * Solution must be time O(N)
 */

function sameFrequency(n1, n2) {
  const string1 = n1.toString();
  const string2 = n2.toString();
  

  if (string1.length !== string2.length) {
    console.log(false);
    return false;
  }

  const lookup = {};
  const lookup2 = {};

  for (const key in string1) {
    const char = string1.charAt(key);
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const key in string2) {
    const char = string2.charAt(key);
    lookup2[char] = (lookup2[char] || 0) + 1;
  }
  
  for (const key in lookup) {
    if (lookup[key] !== lookup2[key]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
  
}

// sample output:
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
