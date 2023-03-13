/* exported numVowels */
function numVowels(string) {
  var numOfVowels = 0;

  for ( i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'A') {
  numOfVowels += 1;
    } else if (string[i] == 'e' || string[i] == 'E') {
      numOfVowels += 1;
    } else if (string[i] == 'i' || string[i] == 'I') {
      numOfVowels += 1;
    } else if (string[i] == 'o' || string[i] == 'O') {
      numOfVowels += 1;
    } else if (string[i] == 'u' || string[i] == 'U') {
      numOfVowels += 1;
    }
  } return numOfVowels;
}
