/* exported ransomCase */
function ransomCase(string) {
  var Lstring = string.toLowerCase();
  var splitString = Lstring.split('');

  for ( i = 1; i < string.length; i += 2 ) {
     splitString[i] = splitString[i].toUpperCase();
  } return splitString.join('');
}
