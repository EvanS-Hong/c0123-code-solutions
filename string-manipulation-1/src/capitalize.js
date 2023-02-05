/* exported capitalize */
function capitalize(word) {
  var lc = word.toLowerCase();
  lc = word.charAt(0).toUpperCase() + lc.slice(1);
  return lc;
}
