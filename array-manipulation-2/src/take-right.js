/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  var i = (array.length - count);
    if (array.length < count) {
      newArray = array;
    } else { newArray = array.slice(i)
    } return newArray;
    }
