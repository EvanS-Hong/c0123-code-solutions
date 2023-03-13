/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  var array = string.split('');
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  return array.join('');
}
