/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.subject = subject
};

Student.prototype.getFullName = function () {
    fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }

Student.prototype.getIntroduction = function () {
    introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return introduction;

  }
