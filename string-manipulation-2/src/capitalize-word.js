/* exported capitalizeWord */
function capitalizeWord(word) {
  var lword = word.toLowerCase();
  if (lword == 'javascript') {
    return 'JavaScript';
  } else {
  return word.charAt(0).toUpperCase() + lword.slice(1);
  }
}
