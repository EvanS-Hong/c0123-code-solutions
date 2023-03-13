/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  var i = (array.length - count);
  if (array.length == 0) {
    newArray = [];
  } else { newArray = array.slice(0 ,i);
  } return newArray;
}
