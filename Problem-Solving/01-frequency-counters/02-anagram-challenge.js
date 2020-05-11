/**
* Given two strings. Write a function called Valid Anagram to determine 
* if the second string is an anagram of the first.
* an anagram is a word, prase or name formed by rearranging the letters of 
* another, such as cinema formed from iceman
*/

function validAnagram(string1, string2){

  // if both strings are empty, return true
  if(string1 === '' && string2 === ''){
    return true;
  }

  // return false it strings doen´t have the same length
  if(string1.length !== string2.length){
    return false;
  }

  // create objects
  let frequencieCounter1 = {};
  let frequencieCounter2 = {};

  // Store the letters of the first string in an object that counts them
  for (const key in string1) {
    let char = string1.charAt(key)
    frequencieCounter1[char] = (frequencieCounter1[char] || 0) + 1;
  }

  // Store the letters of the first string in an object that counts them
  for (const key in string2) {
    let char = string2.charAt(key)
    frequencieCounter2[char] = (frequencieCounter2[char] || 0) + 1;
  }

  // compare the two objects to determine if they share the same letters 
  // and frequencies and return the result
  for (const key in frequencieCounter1) {
    if (frequencieCounter1[key] !== frequencieCounter2[key]) {
      return false;
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
