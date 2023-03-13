/* exported omit */
function omit(source, keys) {
  var obj = {};
  for (let x in source) {
    if ( !keys.includes(x)) {
    obj[x] = source[x];
    }
  } return obj;
}
