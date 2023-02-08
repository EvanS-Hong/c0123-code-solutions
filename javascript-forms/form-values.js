var form = document.querySelector('form');

function formSubmit(event) {
  event.preventDefault();
  var object = {
    'name': form.elements.name.value,
    'email': form.elements.email.value,
    'message': form.elements.message.value,
  };
  console.log(object);
}

form.addEventListener('submit', formSubmit);
