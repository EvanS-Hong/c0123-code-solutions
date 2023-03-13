/* exported pick */
function pick(source, keys) {
  var obj = {};

  for (var i = 0; i < keys.length; i++) {
    if ( source[keys[i]] !== undefined ) {
      obj[keys[i]] = source[keys[i]]
    }
  } return obj
}
