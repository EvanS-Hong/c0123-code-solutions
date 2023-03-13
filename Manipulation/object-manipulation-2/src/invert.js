/* exported invert */
function invert(source) {
  var obj = {};
  for (let x in source) {
    var key = x;
    var keyValue = source[x];
    obj[keyValue] = key;
  }
  console.log(obj);
  return obj;
}
