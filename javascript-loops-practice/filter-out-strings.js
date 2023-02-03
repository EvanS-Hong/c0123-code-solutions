/* exported filterOutStrings */
function filterOutStrings(values) {
  newArray = [];
  for (i = 0; i < values.length; i++) {
    if ((typeof(values[i])) != 'string') {
      newArray.push(values[i]);
    }
  } return newArray;
}
