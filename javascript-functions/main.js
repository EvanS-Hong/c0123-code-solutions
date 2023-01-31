function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return minutes +' minutes is ' + seconds + ' seconds.' ;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(3);
console.log('converMinutesToSecondsResults is: ', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}

var greetResults = greet('Travis');
console.log('greetResults is:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return 'The total area is: ' + area;
}

var getAreaResults = getArea(6, 3);
console.log('getAreaResults is: ', getAreaResults);

function getFirstName(person) {
  var person = {
    firstName: 'Ray',
    lastName: 'Chase',
  };
  return person.firstName;
}

var getFirstNameResults = getFirstName('person')
console.log('getFirstNameResults is: ', getFirstNameResults);

function getLastElement (array) {
  var array = ['fire', 'earth', 'water', 'wind'];
  lastIndex = array.length - 1;
  return array[lastIndex];
}

var getLastElementResults = getLastElement('array');
console.log('getLastElementResults is: ', getLastElementResults);
