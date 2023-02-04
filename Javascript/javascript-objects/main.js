var student = {
  firstName: 'Evan ',
  lastName: 'Hong',
  age: 25,
}
var fullName = student.firstName + student.lastName;

console.log(fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Delivery driver';

console.log(student.livesInIrvine);
console.log(student.previousOccupation);

var vehicle = {
  make: 'Audi',
  model: 'R8',
  year: 2020,
}

vehicle['color'] = 'Black',
vehicle['isConvertible'] = false;

console.log(vehicle['color']);
console.log(vehicle['isConvertible']);

var pet = {
  name: 'Pika',
  type: 'chiahuahua',
}

delete pet.name;
delete pet.type;
console.log(pet);
