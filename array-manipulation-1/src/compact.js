/* exported compact */
function compact(array){
  var newArray=[];
  for (i = 0; i< array.length; i++) {
    if (!!(array[i])  !== false) {
      newArray.push(array[i]);
    }
  } return newArray;
}
