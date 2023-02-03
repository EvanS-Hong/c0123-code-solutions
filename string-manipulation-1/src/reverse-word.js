/* exported reverseWord */
function reverseWord(word) {
  var newString = "";
  for (i = (word.length -1 ); i >= 0; i--) {
  newString += word[i];
  } return newString;
}
