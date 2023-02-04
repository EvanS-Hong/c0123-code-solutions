var colors = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log('America is ' + (colors[0]) +', ' + (colors[1]) +', ' + (colors[2]));

colors[2] = 'green';
console.log('Mexico is ' + (colors[0]) + ', ' + (colors[1]) + ', ' + (colors[2]));

var student =['Maria', 'Steve', 'Brandon', 'Joy'];
var numberOfStudents = student.length;

console.log('The class has ' + numberOfStudents +' students');

var lastIndex = numberOfStudents -= 1;

var lastStudent = student[lastIndex];
console.log('The last student in the class is ' + lastStudent);
