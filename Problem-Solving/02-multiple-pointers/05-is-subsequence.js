/**
 * Write a function called isSubsequence which takes in two 
 * strings and checks whether the characters in the first 
 * string form a subsequence of the characters in the second string.
 * In other words the function should check whether the characters 
 * in the first string appear somewhere in the second string 
 * withhout order changing.
 */

function isSunsequence(string1, string2) {
  var i = 0;
  var j = 0;

  if (!string1) {
    return logger(true);
  };

  while (j < string2.length) {
    if (string2[j] === string1[i]) i++;
    if (i === string1.length) return logger(true);
    j++;
  }
  return logger(false);
}

function logger(arg) {
  console.log(arg);
}

isSunsequence('hello', 'hello world'); // true
isSunsequence('sing', 'sting'); // true
isSunsequence('abc', 'abracadabra'); // true
isSunsequence('abc', 'acb'); // false, (order matters)

