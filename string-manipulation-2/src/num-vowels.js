/* exported numVowels */
function numVowels(string) {
  var numOfVowels = 0;

  var stringArray = string.split('');
  for ( i = 0; i < stringArray.length; i++) {
    if (stringArray[i] == 'a' || stringArray[i] == 'A') {
  numOfVowels += 1;
    } else if (stringArray[i] == 'e' || stringArray[i] == 'E') {
      numOfVowels += 1;
    } else if (stringArray[i] == 'i' || stringArray[i] == 'I') {
      numOfVowels += 1;
    } else if (stringArray[i] == 'o' || stringArray[i] == 'O') {
      numOfVowels += 1;
    } else if (stringArray[i] == 'u' || stringArray[i] == 'U') {
      numOfVowels += 1;
    }
  } return numOfVowels;
}
