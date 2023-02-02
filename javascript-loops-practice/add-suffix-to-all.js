/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var word=[];
  var string = '';
  for ( i = 0; i < words.length; i++) {
  string = words[i] + suffix;
  word.push(string);
} return word;
}
