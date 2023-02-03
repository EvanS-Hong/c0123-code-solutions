/* exported oddOrEven */
function oddOrEvens(numbers) {
  array = []
  for (i = 0; i<numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  } return array;
}
