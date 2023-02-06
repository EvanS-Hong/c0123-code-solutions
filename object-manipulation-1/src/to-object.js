/* exported toObject */
function toObject(KeyValuePair) {
  var object = {};
  object[KeyValuePair[0]] = (KeyValuePair[1]);
return object
}
