/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    var newKey = ((keys[i] + ': ' + source[keys[i]]));
    console.log(newKey);
  } return obj;
}
