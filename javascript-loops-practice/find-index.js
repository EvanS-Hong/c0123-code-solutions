/* exported findIndex */
function findIndex(array, value) {
  number = 0;
  for (i = 0; i < array.length; i++) {
    if ((array[i]) === value) {
      number = i;
      return number;
      break;
    }
  } number = -1;
  return number;
}
