const palindromes = function (string) {
   let newString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    // [^A-Za-z] 
    // [A-Za-z] would match anything between A-Z, and a-z. 
    // [^] before A-Za-z indicates anything that is NOT alphabet characters, would be replaced with "" or aka deleted. 
    // g modifier means more than one
   let reversedString = newString.split('').reverse().join('');
   if(reversedString === newString) {
      return true;
   } else {
      return false;
   }
}

// Do not edit below this line
module.exports = palindromes;
