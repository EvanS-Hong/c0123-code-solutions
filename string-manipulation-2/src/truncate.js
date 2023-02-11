/* exported truncate */
function truncate(length, string) {
  if (length > string.length) {
  return string.slice(0, string.length) + "...";
} else if (length < string.length) {
  return string.slice(0, length) + "...";
}
}
