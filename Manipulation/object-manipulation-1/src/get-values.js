/* exported getValues */
function getValues(object) {
  var arr = [];
  for (let value in object) {
    arr.push(object[value]);
  } return arr;
}
