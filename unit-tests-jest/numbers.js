/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter((n) => (n % 2 === 0));
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount) {
  const splitValue = amount.toString().split('.');
  const dollar = splitValue[0];
  const cents = splitValue[1];
  return `$${dollar}.${cents}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] / divisor);
  }
  return newArray;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof (obj[key]) === 'number') {
      obj[key] = value * multiplier;
    }
  });
  return obj;
}
