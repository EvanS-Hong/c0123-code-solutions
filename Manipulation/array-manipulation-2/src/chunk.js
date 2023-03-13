/* exported chunk */
function chunk(array, size) {
  newArray = [];
  for (i=0; i < array.length;i +=size) {
  if (array.length == 0) {
    newArray = [];
  } else {
  newArray.push(array.slice(i, i+size));
    }
  } return newArray
}
