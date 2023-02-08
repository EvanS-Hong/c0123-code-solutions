var input1 = document.querySelector('input');
var input2 = document.getElementById('user-email');
var input3 = document.querySelector('textarea');
var form = document.querySelector('form');

function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event target name: ' + event.target.name);
}

function handleBlur(event) {
  console.log('Blue vent fired');
  console.log('event target name: ' + event.target.name);
}

function handleInput(event) {
console.log('Value of ' + event.target.name + ': ' + event.target.value);
}

input1.addEventListener('focus', handleFocus);
input2.addEventListener('focus', handleFocus);
input3.addEventListener('focus', handleFocus);

input1.addEventListener('blur', handleBlur);
input2.addEventListener('blur', handleBlur);
input3.addEventListener('blur', handleBlur);

input1.addEventListener('input', handleInput);
input2.addEventListener('input', handleInput);
input3.addEventListener('input', handleInput);
