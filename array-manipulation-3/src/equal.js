/* exported equal */

function equal(first, second) {
  let results = true;
  if (first.length < second.length || first.lenth > second.length) {
    return false;
  }
  for (i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      results = true;
    } else {
      return results = false;
    }
  }
  return results;
}
