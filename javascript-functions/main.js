function converMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return minutes +' minutes is ' + seconds + ' seconds.' ;
}

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return 'The total area is: ' + area;
}

function getFirstName(person) {
  var person = {
    firstName: 'Ray',
    lastName: 'Chase',
  };
  return person.firstName;
}

function getLastElement (array) {
  var array = ['fire', 'earth', 'water', 'wind'];
  lastIndex = array.length - 1;
  return array[lastIndex];
}
