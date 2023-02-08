/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (let key in object) {
    keys.push(key);
  } return keys;
}
