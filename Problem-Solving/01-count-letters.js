function charCount(str) {
  // make object to return at end
  result = {};

  // loop over string for each character
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code >96 && code < 123)  ) {
    return false;
  }
  return true;
}

console.log(charCount("Hola Juanca!"));