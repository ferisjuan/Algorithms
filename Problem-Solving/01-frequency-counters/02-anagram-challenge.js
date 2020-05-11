/**
* Given two strings. Write a function called Valid Anagram to determine 
* if the second string is an anagram of the first.
* an anagram is a word, prase or name formed by rearranging the letters of 
* another, such as cinema formed from iceman
*/

function validAnagram(string1, string2){

  // return false it strings doen´t have the same length
  if(string1.length !== string2.length){
    return false;
  }

  // create lookup object
  const lookup = {};

  // Store the letters of the first string in an object that counts them
  for (const key in string1) {
    let char = string1.charAt(key)
    lookup[char] = (lookup[char] || 0) + 1;
  }

  // Store the letters of the first string in an object that counts them
  for (const key in string2) {
    let char = string2.charAt(key)
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('',''));
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('anagram','nagaram'));
console.log(validAnagram('rat','car'));
console.log(validAnagram('awesome','awesom'));
console.log(validAnagram('texttwisttime','timetwisttext'));
