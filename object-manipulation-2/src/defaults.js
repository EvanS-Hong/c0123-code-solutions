/* exported defaults */
function defaults(target, source) {
  for ( let key in source) {
    if ( target[key] === undefined ) {
    target[key] = source[key];
    }
  }
}
