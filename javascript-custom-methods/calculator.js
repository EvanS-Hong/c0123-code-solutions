/* exported calculator */
var calculator = {
  add: function(x,y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x -y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x, y) {
    return x ** 2;
  },
  sumAll: function(numbers) {
    var start = 0;
    for (i = 0; i < numbers.length; i++) {
      start += numbers[i];
    } return start;
  },
  getAverage: function(numbers) {
    var average = 0;
    var total = 0;
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i];
      average = (total / numbers.length);
    } return average;
  },
};
