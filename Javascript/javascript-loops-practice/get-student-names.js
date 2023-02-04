/* exported getStudentNames */
function getStudentNames(students) {
  let names = [];
  for (i=0; i < students.length; i++) {
    names.push(students[i]['name']);
  } return names;
}
