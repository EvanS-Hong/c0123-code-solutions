/* exported filterOutNulls */
function filterOutNulls(values) {
 newArray = [];
  for (i=0; i<values.length; i++) {
    if ((values[i]) != null) {
      newArray.push(values[i]);
    }
  } return newArray;
}
