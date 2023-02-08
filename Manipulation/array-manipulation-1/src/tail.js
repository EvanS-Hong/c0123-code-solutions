/* exported tail */
function tail(array) {
 var newArray = [];
 for (i= 1; i <= (array.length -1) ; i++){
 newArray.push(array[i]);
 } return newArray;
}
