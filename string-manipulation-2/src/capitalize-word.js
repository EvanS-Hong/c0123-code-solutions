/* exported capitalizeWord */
function capitalizeWord(word) {
  var Lword = word.toLowerCase();
  if (Lword == 'javascript') {
    return 'JavaScript';
  } else {
  return word.charAt(0).toUpperCase() + Lword.slice(1);
  }
}
