/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (i =0; i <count; i++) {
  if (array.length = 0) {
    newArray = [];
  } else {newArray = array.slice(count);
  }
  } return newArray;
}
