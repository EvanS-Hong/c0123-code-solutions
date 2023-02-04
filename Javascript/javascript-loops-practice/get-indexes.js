/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  index = 0;
  item = ''
  for (i = 0; i < array.length; i++) {
    item = array[i];
    index = array.indexOf(item);
    indexes.push(index);
  } return indexes;
}
