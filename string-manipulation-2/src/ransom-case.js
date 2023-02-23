/* exported ransomCase */
function ransomCase(string) {
  var lstring = string.toLowerCase();
  var splitString = lstring.split('');

  for ( i = 1; i < string.length; i += 2 ) {
     splitString[i] = splitString[i].toUpperCase();
  } return splitString.join('');
}
