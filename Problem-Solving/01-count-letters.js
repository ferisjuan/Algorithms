function charCount(str) {
  // make object to return at end
  result = {};

  // loop over string for each character
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();

    // if the char is a number/letter and is a key in the object, add one to the count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter and is in the object, add it
    else {
      result[char] = 1;
    }
    // if character is something else (space, period, etc.) do nothing
  }
  // return the object
  return result;
}

console.log(charCount("Hola Juanca!"));