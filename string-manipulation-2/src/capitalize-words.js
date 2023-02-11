/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitString = string.toLowerCase().split(' ');
  for ( i = 0; i < splitString.length; i++){
 splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
} return splitString.join(' ');
}
