/* exported take */
function take(array, count) {
 var newArray = [];
  for (i = 0; i < count; i++) {
    if (array.length == 0) {
      newArray = [];
    } else {newArray.push(array[i]);
  }
} return newArray;
}
