/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (let x in source) {
  console.log(x+': '+ source[x]);
  };
}
