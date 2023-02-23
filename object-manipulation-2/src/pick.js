/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (i = 0; i < keys.length; i++)
  for (let x in source) {
  if (x.includes(keys[i])); {
    obj.push(keys[i]);
    };
  } return obj;
}
