/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initials;
}
